var diameter = 800,
    radius = diameter / 2,
    innerRadius = radius - 120;

var cluster = d3.cluster()
    .size([360, innerRadius]);

var line = d3.radialLine()
    .curve(d3.curveBundle.beta(0.85))
    .radius(function(d) { return d.y; })
    .angle(function(d) { return d.x / 180 * Math.PI; });

var svg = d3.select("#interactions").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var link = svg.append("g").selectAll(".link"),
    node = svg.append("g").selectAll(".node");

d3.json(links_path, function(error, classes) {
  if (error) throw error;

  var root = packageHierarchy(classes)
      .sum(function(d) { return d.size; });

  cluster(root);

  link = link
    .data(packageImports(root.leaves()))
    .enter().append("path")
      .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
      .attr("class", "link")
      .attr("d", line);

  node = node
    .data(root.leaves())
    .enter().append("text")
      .attr("class", "node")
      .attr("dy", "0.31em")
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      .text(function(d) { return d.data.key; })
      .on("mouseover", mouseovered)
      .on("mouseout", mouseouted);
});

function mouseovered(d) {
  node
      .each(function(n) { n.target = n.source = false; });

  link
      .classed("link--target", function(l) { if (l.target === d) return l.source.source = true; })
      .classed("link--source", function(l) { if (l.source === d) return l.target.target = true; })
    .filter(function(l) { return l.target === d || l.source === d; })
      .raise();

  node
      .classed("node--target", function(n) { return n.target; })
      .classed("node--source", function(n) { return n.source; });
}

function mouseouted(d) {
  link
      .classed("link--target", false)
      .classed("link--source", false);

  node
      .classed("node--target", false)
      .classed("node--source", false);
}

// Lazily construct the package hierarchy from class names.
function packageHierarchy(classes) {
  var map = {};

  function find(name, data) {
    var node = map[name], i;
    if (!node) {
      node = map[name] = data || {name: name, children: []};
      if (name.length) {
        node.parent = find("");
        node.parent.children.push(node);
        node.key = name;
      }
    }
    return node;
  }

  classes.forEach(function(d) {
    find(d.name, d);
  });

  return d3.hierarchy(map[""]);
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
  var map = {},
      imports = [];

  // Compute a map from name to node.
  nodes.forEach(function(d) {
    map[d.data.name] = d;
  });

  // For each import, construct a link from the source to target node.
  nodes.forEach(function(d) {
    if (d.data.imports) d.data.imports.forEach(function(i) {
      imports.push(map[d.data.name].path(map[i]));
    });
  });

  return imports;
}
var window_w = $("#interactions").parent().width();
var new_w = window_w / (800);
$("#interactions").css("zoom", new_w).css("width", window_w);
var nodes = null;
var edges = null;
var network = null;

function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = [{'id': 4, 'label': 'tim rocktschel', 'value': 4},
 {'id': 5, 'label': 'alexei a efros', 'value': 4},
 {'id': 7, 'label': 'douwe kiela', 'value': 4},
 {'id': 9, 'label': 'pinyu chen', 'value': 4},
 {'id': 10, 'label': 'david raposo', 'value': 4},
 {'id': 11, 'label': 'adam santoro', 'value': 4},
 {'id': 12, 'label': 'hado van hasselt', 'value': 4},
 {'id': 13, 'label': 'john quan', 'value': 4},
 {'id': 14, 'label': 'smita krishnaswamy', 'value': 4},
 {'id': 16, 'label': 'ofir nachum', 'value': 4},
 {'id': 17, 'label': 'matteo hessel', 'value': 4},
 {'id': 18, 'label': 'david budden', 'value': 4},
 {'id': 19, 'label': 'luke metz', 'value': 4},
 {'id': 20, 'label': 'jitendra malik', 'value': 4},
 {'id': 21, 'label': 'ke li', 'value': 4},
 {'id': 24, 'label': 'liwei wang', 'value': 4},
 {'id': 26, 'label': 'jian tang', 'value': 4},
 {'id': 27, 'label': 'zhaoran wang', 'value': 4},
 {'id': 28, 'label': 'qiang liu', 'value': 4},
 {'id': 29, 'label': 'edward hughes', 'value': 4},
 {'id': 30, 'label': 'matthew botvinick', 'value': 4},
 {'id': 31, 'label': 'david silver', 'value': 4},
 {'id': 32, 'label': 'sijia liu', 'value': 4},
 {'id': 33, 'label': 'gang niu', 'value': 4},
 {'id': 34, 'label': 'jinfeng yi', 'value': 4},
 {'id': 37, 'label': 'hao zhang', 'value': 4},
 {'id': 39, 'label': 'amos storkey', 'value': 4},
 {'id': 40, 'label': 'edward grefenstette', 'value': 4},
 {'id': 41, 'label': 'huan zhang', 'value': 4},
 {'id': 42, 'label': 'jonathan uesato', 'value': 4},
 {'id': 43, 'label': 'jungwoo ha', 'value': 5},
 {'id': 44, 'label': 'william t freeman', 'value': 5},
 {'id': 49, 'label': 'ioannis mitliagkas', 'value': 5},
 {'id': 50, 'label': 'guy wolf', 'value': 5},
 {'id': 51, 'label': 'nando de freitas', 'value': 5},
 {'id': 53, 'label': 'razvan pascanu', 'value': 5},
 {'id': 54, 'label': 'bo li', 'value': 5},
 {'id': 55, 'label': 'sylvain gelly', 'value': 5},
 {'id': 56, 'label': 'michael auli', 'value': 5},
 {'id': 58, 'label': 'wei chen', 'value': 5},
 {'id': 59, 'label': 'di he', 'value': 5},
 {'id': 60, 'label': 'le song', 'value': 5},
 {'id': 61, 'label': 'zhiting hu', 'value': 5},
 {'id': 62, 'label': 'marcus rohrbach', 'value': 5},
 {'id': 64, 'label': 'anirudh goyal', 'value': 6},
 {'id': 65, 'label': 'masashi sugiyama', 'value': 6},
 {'id': 66, 'label': 'honglak lee', 'value': 6},
 {'id': 67, 'label': 'eric p xing', 'value': 6},
 {'id': 68, 'label': 'timothy lillicrap', 'value': 6},
 {'id': 69, 'label': 'devi parikh', 'value': 6},
 {'id': 71, 'label': 'abhishek gupta', 'value': 6},
 {'id': 73, 'label': 'tengyu ma', 'value': 6},
 {'id': 74, 'label': 'dhruv batra', 'value': 6},
 {'id': 75, 'label': 'dawn song', 'value': 6},
 {'id': 76, 'label': 'jascha sohldickstein', 'value': 6},
 {'id': 77, 'label': 'chojui hsieh', 'value': 7},
 {'id': 79, 'label': 'yuandong tian', 'value': 7},
 {'id': 80, 'label': 'jiajun wu', 'value': 7},
 {'id': 82, 'label': 'nicolas heess', 'value': 7},
 {'id': 83, 'label': 'jian peng', 'value': 7},
 {'id': 84, 'label': 'trevor darrell', 'value': 7},
 {'id': 85, 'label': 'tao qin', 'value': 7},
 {'id': 86, 'label': 'oriol vinyals', 'value': 8},
 {'id': 87, 'label': 'yee whye teh', 'value': 8},
 {'id': 88, 'label': 'joshua b tenenbaum', 'value': 8},
 {'id': 89, 'label': 'kyunghyun cho', 'value': 8},
 {'id': 90, 'label': 'chelsea finn', 'value': 8},
 {'id': 91, 'label': 'ruslan salakhutdinov', 'value': 9},
 {'id': 92, 'label': 'pushmeet kohli', 'value': 10},
 {'id': 93, 'label': 'aaron courville', 'value': 10},
 {'id': 94, 'label': 'richard socher', 'value': 10},
 {'id': 95, 'label': 'pieter abbeel', 'value': 10},
 {'id': 96, 'label': 'tieyan liu', 'value': 11},
 {'id': 97, 'label': 'caiming xiong', 'value': 11},
 {'id': 98, 'label': 'sergey levine', 'value': 25},
 {'id': 99, 'label': 'yoshua bengio', 'value': 25}];
edges = [{'from': 4, 'to': 40, 'value': 1},
 {'from': 5, 'to': 39, 'value': 1},
 {'from': 5, 'to': 84, 'value': 3},
 {'from': 5, 'to': 98, 'value': 1},
 {'from': 7, 'to': 69, 'value': 1},
 {'from': 7, 'to': 74, 'value': 1},
 {'from': 7, 'to': 89, 'value': 2},
 {'from': 9, 'to': 32, 'value': 2},
 {'from': 9, 'to': 34, 'value': 1},
 {'from': 9, 'to': 41, 'value': 2},
 {'from': 9, 'to': 54, 'value': 1},
 {'from': 9, 'to': 75, 'value': 1},
 {'from': 9, 'to': 77, 'value': 1},
 {'from': 10, 'to': 11, 'value': 3},
 {'from': 10, 'to': 29, 'value': 1},
 {'from': 10, 'to': 30, 'value': 2},
 {'from': 10, 'to': 31, 'value': 1},
 {'from': 10, 'to': 51, 'value': 1},
 {'from': 10, 'to': 53, 'value': 2},
 {'from': 10, 'to': 68, 'value': 2},
 {'from': 10, 'to': 86, 'value': 1},
 {'from': 11, 'to': 30, 'value': 1},
 {'from': 11, 'to': 31, 'value': 1},
 {'from': 11, 'to': 51, 'value': 1},
 {'from': 11, 'to': 53, 'value': 2},
 {'from': 11, 'to': 68, 'value': 3},
 {'from': 11, 'to': 86, 'value': 1},
 {'from': 12, 'to': 13, 'value': 3},
 {'from': 12, 'to': 17, 'value': 3},
 {'from': 12, 'to': 18, 'value': 1},
 {'from': 12, 'to': 31, 'value': 3},
 {'from': 13, 'to': 17, 'value': 2},
 {'from': 13, 'to': 18, 'value': 1},
 {'from': 13, 'to': 31, 'value': 2},
 {'from': 14, 'to': 50, 'value': 4},
 {'from': 16, 'to': 66, 'value': 1},
 {'from': 16, 'to': 98, 'value': 1},
 {'from': 17, 'to': 18, 'value': 1},
 {'from': 17, 'to': 31, 'value': 2},
 {'from': 17, 'to': 92, 'value': 1},
 {'from': 18, 'to': 51, 'value': 2},
 {'from': 18, 'to': 86, 'value': 2},
 {'from': 19, 'to': 76, 'value': 3},
 {'from': 20, 'to': 21, 'value': 4},
 {'from': 24, 'to': 59, 'value': 2},
 {'from': 24, 'to': 85, 'value': 2},
 {'from': 24, 'to': 96, 'value': 2},
 {'from': 26, 'to': 32, 'value': 1},
 {'from': 26, 'to': 64, 'value': 1},
 {'from': 26, 'to': 99, 'value': 2},
 {'from': 27, 'to': 28, 'value': 1},
 {'from': 27, 'to': 83, 'value': 2},
 {'from': 28, 'to': 73, 'value': 1},
 {'from': 28, 'to': 83, 'value': 3},
 {'from': 29, 'to': 30, 'value': 1},
 {'from': 29, 'to': 40, 'value': 1},
 {'from': 29, 'to': 51, 'value': 1},
 {'from': 29, 'to': 92, 'value': 1},
 {'from': 30, 'to': 53, 'value': 1},
 {'from': 30, 'to': 64, 'value': 1},
 {'from': 30, 'to': 68, 'value': 1},
 {'from': 30, 'to': 86, 'value': 1},
 {'from': 30, 'to': 98, 'value': 1},
 {'from': 30, 'to': 99, 'value': 1},
 {'from': 31, 'to': 68, 'value': 1},
 {'from': 32, 'to': 41, 'value': 1},
 {'from': 33, 'to': 65, 'value': 4},
 {'from': 34, 'to': 41, 'value': 1},
 {'from': 34, 'to': 54, 'value': 1},
 {'from': 34, 'to': 75, 'value': 1},
 {'from': 34, 'to': 77, 'value': 1},
 {'from': 34, 'to': 83, 'value': 1},
 {'from': 37, 'to': 61, 'value': 1},
 {'from': 37, 'to': 91, 'value': 1},
 {'from': 39, 'to': 84, 'value': 1},
 {'from': 40, 'to': 42, 'value': 1},
 {'from': 40, 'to': 92, 'value': 3},
 {'from': 41, 'to': 77, 'value': 1},
 {'from': 42, 'to': 82, 'value': 1},
 {'from': 42, 'to': 92, 'value': 4},
 {'from': 43, 'to': 89, 'value': 1},
 {'from': 44, 'to': 80, 'value': 4},
 {'from': 44, 'to': 88, 'value': 5},
 {'from': 44, 'to': 90, 'value': 1},
 {'from': 44, 'to': 98, 'value': 1},
 {'from': 49, 'to': 64, 'value': 1},
 {'from': 49, 'to': 93, 'value': 1},
 {'from': 49, 'to': 99, 'value': 3},
 {'from': 51, 'to': 53, 'value': 1},
 {'from': 51, 'to': 86, 'value': 1},
 {'from': 53, 'to': 68, 'value': 1},
 {'from': 53, 'to': 82, 'value': 1},
 {'from': 53, 'to': 86, 'value': 2},
 {'from': 53, 'to': 87, 'value': 1},
 {'from': 54, 'to': 60, 'value': 1},
 {'from': 54, 'to': 66, 'value': 1},
 {'from': 54, 'to': 75, 'value': 2},
 {'from': 54, 'to': 83, 'value': 1},
 {'from': 55, 'to': 68, 'value': 1},
 {'from': 56, 'to': 73, 'value': 1},
 {'from': 58, 'to': 59, 'value': 1},
 {'from': 58, 'to': 96, 'value': 4},
 {'from': 59, 'to': 85, 'value': 4},
 {'from': 59, 'to': 96, 'value': 5},
 {'from': 61, 'to': 67, 'value': 4},
 {'from': 61, 'to': 91, 'value': 2},
 {'from': 62, 'to': 69, 'value': 2},
 {'from': 62, 'to': 74, 'value': 2},
 {'from': 62, 'to': 79, 'value': 1},
 {'from': 62, 'to': 84, 'value': 1},
 {'from': 64, 'to': 68, 'value': 1},
 {'from': 64, 'to': 69, 'value': 1},
 {'from': 64, 'to': 74, 'value': 1},
 {'from': 64, 'to': 93, 'value': 1},
 {'from': 64, 'to': 98, 'value': 2},
 {'from': 64, 'to': 99, 'value': 6},
 {'from': 66, 'to': 98, 'value': 1},
 {'from': 67, 'to': 91, 'value': 2},
 {'from': 68, 'to': 86, 'value': 1},
 {'from': 68, 'to': 98, 'value': 1},
 {'from': 68, 'to': 99, 'value': 1},
 {'from': 69, 'to': 74, 'value': 6},
 {'from': 69, 'to': 79, 'value': 1},
 {'from': 69, 'to': 91, 'value': 1},
 {'from': 69, 'to': 99, 'value': 1},
 {'from': 71, 'to': 90, 'value': 2},
 {'from': 71, 'to': 95, 'value': 2},
 {'from': 71, 'to': 98, 'value': 6},
 {'from': 73, 'to': 79, 'value': 1},
 {'from': 73, 'to': 84, 'value': 1},
 {'from': 74, 'to': 79, 'value': 1},
 {'from': 74, 'to': 91, 'value': 1},
 {'from': 74, 'to': 99, 'value': 1},
 {'from': 75, 'to': 83, 'value': 1},
 {'from': 79, 'to': 84, 'value': 1},
 {'from': 80, 'to': 88, 'value': 7},
 {'from': 80, 'to': 90, 'value': 1},
 {'from': 80, 'to': 92, 'value': 1},
 {'from': 80, 'to': 98, 'value': 1},
 {'from': 82, 'to': 87, 'value': 2},
 {'from': 82, 'to': 92, 'value': 1},
 {'from': 84, 'to': 98, 'value': 1},
 {'from': 85, 'to': 96, 'value': 6},
 {'from': 86, 'to': 87, 'value': 1},
 {'from': 86, 'to': 92, 'value': 1},
 {'from': 88, 'to': 90, 'value': 1},
 {'from': 88, 'to': 92, 'value': 1},
 {'from': 88, 'to': 98, 'value': 1},
 {'from': 90, 'to': 95, 'value': 3},
 {'from': 90, 'to': 98, 'value': 8},
 {'from': 93, 'to': 99, 'value': 5},
 {'from': 94, 'to': 97, 'value': 10},
 {'from': 95, 'to': 98, 'value': 6},
 {'from': 98, 'to': 99, 'value': 2}];  // Instantiate our network object.
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    nodes: {
      shape: 'dot',
    }
  };
  network = new vis.Network(container, data, options);
}
$(document).ready(draw);
