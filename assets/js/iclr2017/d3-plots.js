/*** Initialization ***/
// Data
function create_dataset(N) {
    var dataset = [];
    var colors = [];
    for (i = 0; i < N; i++) {
        dataset.push([Math.random() - 0.5, Math.random() - 0.5]);
        colors.push([Math.ceil(Math.random()*255), Math.ceil(Math.random()*255), Math.ceil(Math.random()*255) ]);
    }
    return [dataset, colors];
}

// Graphics init
//Width and height
var xScale, yScale, xAngleScale, yAngleScale;
var scatterMargin = 20;
var angleMargin = 30;
var w = 500;
var h = 500;
var w_angle = 500;
var h_angle = 125;
var r = 10;
var maxIter = 100;

function Regularizer(dataset, orthoreg, scatterHandler, angleHandler,stroke) {
    this.dataset = dataset;
    this.orthoreg = orthoreg;
    this.scatterHandler = scatterHandler;
    this.min_angle = [{x:null, y:null}];
    this.active = true;
    this.line = d3.line()
        .curve(d3.curveBasis)
        .x(function(d) { return xAngleScale(d.x);})
        .y(function(d) { return yAngleScale(d.y);});
    this.angleHandler = angleHandler.append("path")
        .attr("stroke", stroke)
        .attr("class", "line")
        .attr("d", this.line(this.min_angle));
    Regularizer.nactive = Regularizer.nactive + 1;
}
var regularizers = []
// Create svg canvas
var baselineScatterHandler = d3.select("#baseline")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", "0 0 " + w + " " + h)
            .attr("preserveAspectRatio", "xMidYMid meet"); 
var orthoregScatterHandler = d3.select("#orthoreg")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", "0 0 " + w + " " + h)
            .attr("preserveAspectRatio", "xMidYMid meet"); 
var angleHandler = d3.select("#angle")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", "0 0 " + w_angle + " " + h_angle)
            .attr("preserveAspectRatio", "xMidYMid meet"); 

function SquashingGraph() { 
    var w_squashing = 300;
    var h_squashing = 300;
    var w_squashing_margin = 30;
    var h_squashing_margin = 30;
    var xCosScale = d3.scaleLinear()
                .domain([-Math.PI, Math.PI])
                .range([w_squashing_margin, w_squashing - w_squashing_margin]);
    var yCosScale = d3.scaleLinear()
                .domain([0,1])
                .range([h_squashing - h_squashing_margin, h_squashing_margin]);
    var xSquashingScale = d3.scaleLinear()
                .domain([-Math.PI, Math.PI])
                .range([w_squashing_margin, w_squashing-w_squashing_margin]);
    var ySquashingScale = d3.scaleLinear()
                .domain([-0.01,0.7])
                .range([h_squashing-h_squashing_margin, h_squashing_margin]);
    var cos2 = function(min, max, samples) {
        var values = [];
        var inc = (max - min) / samples;
        for (var i = 0; i <= samples; i++) {
            values.push({x:min+i*inc, y:Math.pow(Math.cos(min+i*inc), 2)});
        }
        return values;
    }
    var squash = function(min, max, samples, lambda) {
        var values = [];
        var inc = (max - min) / samples;
        for (var i = 0; i <= samples; i++) {
            values.push({x:min+i*inc,
                    y:Math.log(1+Math.exp(lambda*Math.cos(min+i*inc)-lambda))});
        }
        return values;
    }
    var squashingHandler = d3.select("#squashing")
                .append("svg")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("viewBox", "0 0 " + w_squashing + " " + h_squashing)
                .attr("preserveAspectRatio", "xMidYMid meet"); 
    var cosLine = d3.line()
        .curve(d3.curveBasis)
        .x(function(d) { return xCosScale(d.x);})
        .y(function(d) { return yCosScale(d.y);});
    var squashLine = d3.line()
        .curve(d3.curveBasis)
        .x(function(d) { return xSquashingScale(d.x);})
        .y(function(d) { return ySquashingScale(d.y);});
    var cos2Handler = squashingHandler.append("path")
        .attr("stroke", "steelblue")
        .attr("class", "line")
        .attr("d", cosLine(cos2(-Math.PI, Math.PI, 20)));
    var squashHandler = squashingHandler.append("path")
        .attr("stroke", "red")
        .attr("class", "line squash-line")
        .attr("d", squashLine(squash(-Math.PI, Math.PI, 20, 10)));
    squashingHandler.append("g")
        .attr("transform", "translate(" + w_squashing_margin + ", 0)")
        .call(d3.axisLeft(yCosScale));
    squashingHandler.append("g")
        .attr("transform", "translate(0," + (h_squashing -
                        h_squashing_margin)+ ")")
        .call(d3.axisBottom(xCosScale)
                .tickValues([-Math.PI, -Math.PI/2, 0, Math.PI/2, Math.PI])
                .tickFormat(function(d,i) { return ["-\pi", "\pi / 2", "0",
                    "pi / 2", "pi"][i]; }));
    this.updateGraph = function (value) { squashHandler.attr("d",
            squashLine(squash(-Math.PI, Math.PI, 20, value))); }
}

function initScatterGraphics(handler, dataset, colors) {
    var lineContent = handler.selectAll("line")
        .data(dataset);
    lineContent.enter()
        .append("line")
        .attr("x1", function(d) {return xScale(d[0]); })
        .attr("y1", function(d) {return yScale(d[1]); })
        .attr("x2", function(d) {return w / 2; })
        .attr("y2", function(d) {return h / 2; } )
        .attr("stroke", "gray")
    lineContent.exit().remove();
    var circleContent = handler.selectAll("circle")
        .data(dataset);
    circleContent.enter()
        .append("circle")
        .attr("cx", function(d) { return xScale(d[0]); })
        .attr("cy", function(d) { return yScale(d[1]); })
        .attr("r", r)
    circleContent.exit().remove();
    handler.selectAll("circle")
        .data(colors)
        .attr("fill", function(d) { return "rgb(" + d[0] + "," + d[1] + "," + d[2] + ")"; } )
        .attr("opacity", 0.98);
}


/*** Main loop ***/
function updateData(dataset, orthoreg, alpha, sigma) {
    var orig_norms = dataset.map(numeric.norm2);
    orig_norms = numeric.transpose([orig_norms, orig_norms]);
    var ndataset = numeric.div(dataset, orig_norms);
    var grad = numeric.dot(ndataset, numeric.transpose(ndataset));
    var angle = numeric.acos(grad);
    var min_angle = 0.0;
    numeric.abseq(angle);
    for ( var i = 0; i < angle.length; i++) {
        angle[i][i] = Infinity;
        //for ( var j = 0; j <= i; j++) {
        //    angle[i][j] = Infinity;
        //}
        min_angle = min_angle + d3.min(angle[i]);
    }
    if (orthoreg) {
        numeric.muleq(grad, sigma);
        numeric.expeq(grad);
        grad = numeric.div(numeric.mul(sigma, grad), numeric.add(grad, Math.exp(sigma)))
    }
    var identity = numeric.sub(1, numeric.identity(grad.length));
    grad = numeric.mul(grad, identity);
    grad = numeric.dot(grad, ndataset);
    grad = numeric.mul(grad, alpha/dataset.length);
    numeric.addeq(dataset, grad);
    var norms2 = dataset.map(numeric.norm2);
    numeric.diveq(dataset, numeric.transpose([norms2, norms2]));
    numeric.muleq(dataset, orig_norms);
    return min_angle;
}

function updateScatterGraphics(handler, dataset) {
    handler.selectAll("circle")
        .data(dataset)
        .transition()
        .attr("cx", function(d) { return xScale(d[0]); })
        .attr("cy", function(d) { return yScale(d[1]); })
    handler.selectAll("line")
        .data(dataset)
        .transition()
        .attr("x1", function(d) {return xScale(d[0]); })
        .attr("y1", function(d) {return yScale(d[1]); })
        .attr("x2", function(d) {return w / 2; })
        .attr("y2", function(d) {return h / 2; } )
    var extent1 = d3.extent(dataset, function(d) { return d[0]; } );
    var domain1 = xScale.domain();
    var extent2 = d3.extent(dataset, function(d) { return d[1]; } );
    var domain2 = yScale.domain();
    xScale.domain([Math.min(extent1[0], domain1[0]), Math.max(extent1[1], domain1[1])]);
    yScale.domain([Math.min(extent2[0], domain2[0]), Math.max(extent2[1], domain2[1])]);
}
function updateAngleGraphics(handler, line, data) {
    handler.attr("d", line(data));
}
function updateAxis(maxAngle, maxLength) {
    xAngleScale.domain([0, maxLength]);
    yAngleScale.domain([0, maxAngle]);
    d3.select(".x.axis")
        .call(d3.axisBottom(xAngleScale));
    d3.select(".y.axis")
        .call(d3.axisLeft(yAngleScale).ticks(5));
}
var interval_id = -1;
function scatterStart() {
    if (interval_id >= 0) {
        clearInterval(interval_id);
    }
    var N = +document.getElementById("N").value;
    var alpha = -1 * document.getElementById("alpha").value;
    var sigma = +document.getElementById("lambda").value;
    if (sigma > 30) {
        document.getElementById("lambda").value = 30;
    }
    var ret = create_dataset(N);
    var dataset = ret[0];
    var colors = ret[1];
    var delta = +document.getElementById("delta").value;
    var maxIter = +document.getElementById("maxIter").value - 1;

    if (regularizers.length == 0) {
        xScale = d3.scaleLinear()
                    .domain(d3.extent(dataset, function(d) { return d[0]; } ))
                    .range([scatterMargin, w-scatterMargin]);
        xAngleScale = d3.scaleLinear()
                    .domain([0, 1])
                    .range([angleMargin, w]);
        yScale = d3.scaleLinear()
                    .domain(d3.extent(dataset, function(d) { return d[1]; } ))
                    .range([h-scatterMargin, scatterMargin]);
        yAngleScale = d3.scaleLinear()
                    .domain([0, 1])
                    .range([h_angle-angleMargin, angleMargin]);   
        angleHandler.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (h_angle - angleMargin) + ")")
            .call(d3.axisBottom(xAngleScale));
        angleHandler.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + angleMargin + ", 0)")
            .call(d3.axisLeft(yAngleScale).ticks(5));
        regularizers.push(new Regularizer(dataset, false, baselineScatterHandler, angleHandler, "steelblue"));
        regularizers.push(new Regularizer(numeric.clone(dataset), true, orthoregScatterHandler, angleHandler, "#F08080"));
    } else {
        regularizers[0].dataset = dataset
        regularizers[0].min_angle = [{x:0, y:0}]
        regularizers[0].active = true
        regularizers[1].dataset = numeric.clone(dataset)
        regularizers[1].min_angle = [{x:0, y:0}]
        regularizers[1].active = true
    }
    for ( var i = 0; i < regularizers.length; i++) {
        initScatterGraphics(regularizers[i].scatterHandler, regularizers[i].dataset, colors);
    }
    Regularizer.nactive = 2;
    var currentIter = 0;
    var maxAngle = 0;
    interval_id = setInterval(function(){
        currentIter = currentIter + 1;
        updateAxis(maxAngle, currentIter);
        for ( var i = 0; i < regularizers.length; i++) {
            if (regularizers[i].active) {
                var min_angle = updateData(regularizers[i].dataset, regularizers[i].orthoreg, alpha, sigma);
                maxAngle = Math.max(maxAngle, min_angle);
                if (Math.abs(min_angle - regularizers[i].min_angle[regularizers[i].min_angle.length - 1].y) < delta || currentIter > maxIter) {
                    regularizers[i].active = false;
                    Regularizer.nactive = Regularizer.nactive - 1;
                } else {
                    regularizers[i].min_angle.push({x: currentIter, y: min_angle});
                }
                updateScatterGraphics(regularizers[i].scatterHandler, regularizers[i].dataset);
                updateAngleGraphics(regularizers[i].angleHandler, regularizers[i].line, regularizers[i].min_angle);
            } else {
                updateAngleGraphics(regularizers[i].angleHandler, regularizers[i].line, regularizers[i].min_angle);
            }
        }
        if (Regularizer.nactive == 0) {
            clearInterval(interval_id);
            interval_id = null;
        }
    }, 200) 
}
