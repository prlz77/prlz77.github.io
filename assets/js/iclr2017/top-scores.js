document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("0427eed2-4cc6-4574-9cb3-1fac80485c1c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0427eed2-4cc6-4574-9cb3-1fac80485c1c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"85d28036-94e3-4e0e-8341-bfe12c3526f5":{"roots":{"references":[{"attributes":{"callback":null,"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"},"tooltips":[["title","@title"],["authors","@authors"],["score","@score"],["confidence","@confidence"]]},"id":"f4c1c24e-7314-479e-8155-ca5771c829bb","type":"HoverTool"},{"attributes":{"callback":{"id":"acced019-46d7-4bba-bb06-3cca678ee51a","type":"OpenURL"},"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"}},"id":"dedf188c-a50b-49c5-8493-d714c1cf4102","type":"TapTool"},{"attributes":{"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"}},"id":"3943f2e2-3f66-48f8-b193-ff30d2d44e9d","type":"ResetTool"},{"attributes":{"data_source":{"id":"1c92eca3-e64e-492e-8686-bfb6ec9e8dae","type":"ColumnDataSource"},"glyph":{"id":"eeb62924-a6e7-4360-9d65-8718e71f3cb6","type":"HBar"},"hover_glyph":{"id":"bf968aa0-ba57-45d8-8ae0-de79ad90febb","type":"HBar"},"nonselection_glyph":{"id":"2c219646-559e-41c7-b28d-ee79aa25492d","type":"HBar"},"selection_glyph":null},"id":"fa9b3f3e-e643-4de2-b505-1e3e74874d84","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"}},"id":"f603a08b-7816-4a4e-b71d-f77e37c30c6f","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"score"},"y":{"field":"y"}},"id":"eeb62924-a6e7-4360-9d65-8718e71f3cb6","type":"HBar"},{"attributes":{"plot":null,"text":"Top 10 rated papers","text_font_size":{"value":"24pt"}},"id":"26902faa-1409-4b27-b8df-953f513cc314","type":"Title"},{"attributes":{"callback":null,"column_names":["confidence","title","ids","score","authors","y"],"data":{"authors":["Minjoon Seo; Aniruddha Kembhavi; Ali Farhadi; Hannaneh Hajishirzi","Jonathon Cai; Richard Shin; Dawn Song","Soroush Mehri; Kundan Kumar; Ishaan Gulrajani; Rithesh Kumar; Shubham Jain; Jose Manuel Rodriguez Sotelo; Aaron Courville; Yoshua Bengio","Nicolas Papernot; Mart\u00edn Abadi; \u00dalfar Erlingsson; Ian Goodfellow; Kunal Talwar","Jason Tyler Rolfe","Chris J. Maddison; Andriy Mnih; Yee Whye Teh","Samuel S. Schoenholz; Justin Gilmer; Surya Ganguli; Jascha Sohl-Dickstein","Martin Arjovsky; Leon Bottou","Barret Zoph; Quoc Le","Chiyuan Zhang; Samy Bengio; Moritz Hardt; Benjamin Recht; Oriol Vinyals"],"confidence":[5.0,4.0,3.6666666666666665,3.6666666666666665,3.3333333333333335,4.5,3.5,4.25,4.333333333333333,3.6666666666666665],"ids":["HJ0UKP9ge","BkbY4psgg","SkxKPDv5xl","HkwoSDPgg","ryMxXPFex","S1jE5L5gl","H1W1UN9gg","Hk4_qw5xe","r1Ue8Hcxg","Sy8gdB9xx"],"score":[8.0,8.333333333333334,8.333333333333334,8.333333333333334,8.333333333333334,8.5,8.5,8.75,9.0,9.666666666666666],"title":["Bidirectional Attention Flow for Machine Comprehension","Making Neural Programming Architectures Generalize via Recursion","SampleRNN: An Unconditional End-to-End Neural Audio Generation Model","Semi-supervised Knowledge Transfer for Deep Learning from Private Training Data","Discrete Variational Autoencoders","The Concrete Distribution: A Continuous Relaxation of Discrete Random Variables","Deep Information Propagation","Towards Principled Methods for Training Generative Adversarial Networks","Neural Architecture Search with Reinforcement Learning","Understanding deep learning requires rethinking generalization"],"y":[0,1,2,3,4,5,6,7,8,9]}},"id":"1c92eca3-e64e-492e-8686-bfb6ec9e8dae","type":"ColumnDataSource"},{"attributes":{},"id":"bd9c8b4a-cea6-4a1f-8f1c-99b87d95a0c4","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6a650d66-d9f0-4dce-8de9-f0fa4f5637d3","type":"DataRange1d"},{"attributes":{},"id":"de2fb298-ebf4-4f3f-af64-055f0a5f3db3","type":"BasicTickFormatter"},{"attributes":{"url":"https://openreview.net/forum?id=@ids"},"id":"acced019-46d7-4bba-bb06-3cca678ee51a","type":"OpenURL"},{"attributes":{},"id":"a8d68dfd-8d81-436e-8650-2cf9fc13f7d1","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"score"},"y":{"field":"y"}},"id":"2c219646-559e-41c7-b28d-ee79aa25492d","type":"HBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"score"},"y":{"field":"y"}},"id":"bf968aa0-ba57-45d8-8ae0-de79ad90febb","type":"HBar"},{"attributes":{"axis_label":"Submission","formatter":{"id":"de2fb298-ebf4-4f3f-af64-055f0a5f3db3","type":"BasicTickFormatter"},"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd9c8b4a-cea6-4a1f-8f1c-99b87d95a0c4","type":"BasicTicker"}},"id":"2695b44f-31dd-4c46-9b3f-95ae81fac176","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"58f9eb9b-9012-45d1-ac7f-878911c9668e","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"f4c1c24e-7314-479e-8155-ca5771c829bb","type":"HoverTool"},{"id":"dedf188c-a50b-49c5-8493-d714c1cf4102","type":"TapTool"},{"id":"3943f2e2-3f66-48f8-b193-ff30d2d44e9d","type":"ResetTool"},{"id":"f603a08b-7816-4a4e-b71d-f77e37c30c6f","type":"PanTool"},{"id":"58f9eb9b-9012-45d1-ac7f-878911c9668e","type":"WheelZoomTool"}]},"id":"775fdc77-54dc-4508-a1c6-c14cb325e4eb","type":"Toolbar"},{"attributes":{"below":[{"id":"80fae41e-5463-4d91-9480-8cb18980a7e1","type":"LinearAxis"}],"left":[{"id":"2695b44f-31dd-4c46-9b3f-95ae81fac176","type":"LinearAxis"}],"renderers":[{"id":"80fae41e-5463-4d91-9480-8cb18980a7e1","type":"LinearAxis"},{"id":"6af2fe46-ce16-4183-bd53-f8b2c0fb352a","type":"Grid"},{"id":"2695b44f-31dd-4c46-9b3f-95ae81fac176","type":"LinearAxis"},{"id":"1955da8d-f7c2-4b22-93b3-2d0a8ed6d952","type":"Grid"},{"id":"fa9b3f3e-e643-4de2-b505-1e3e74874d84","type":"GlyphRenderer"}],"title":{"id":"26902faa-1409-4b27-b8df-953f513cc314","type":"Title"},"tool_events":{"id":"a8d68dfd-8d81-436e-8650-2cf9fc13f7d1","type":"ToolEvents"},"toolbar":{"id":"775fdc77-54dc-4508-a1c6-c14cb325e4eb","type":"Toolbar"},"x_range":{"id":"3c562a49-a52c-4850-a93d-fa92205d0972","type":"Range1d"},"y_range":{"id":"6a650d66-d9f0-4dce-8de9-f0fa4f5637d3","type":"DataRange1d"}},"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"}},"id":"58f9eb9b-9012-45d1-ac7f-878911c9668e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c984d630-738a-40ea-bf86-ab90d84da006","type":"BasicTicker"}},"id":"6af2fe46-ce16-4183-bd53-f8b2c0fb352a","type":"Grid"},{"attributes":{"callback":null,"end":12},"id":"3c562a49-a52c-4850-a93d-fa92205d0972","type":"Range1d"},{"attributes":{},"id":"c984d630-738a-40ea-bf86-ab90d84da006","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd9c8b4a-cea6-4a1f-8f1c-99b87d95a0c4","type":"BasicTicker"}},"id":"1955da8d-f7c2-4b22-93b3-2d0a8ed6d952","type":"Grid"},{"attributes":{"axis_label":"Score","formatter":{"id":"0a14afe6-a274-495a-aac4-03616453080e","type":"BasicTickFormatter"},"plot":{"id":"004698f7-b618-40b4-8fc8-334264fac16d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c984d630-738a-40ea-bf86-ab90d84da006","type":"BasicTicker"}},"id":"80fae41e-5463-4d91-9480-8cb18980a7e1","type":"LinearAxis"},{"attributes":{},"id":"0a14afe6-a274-495a-aac4-03616453080e","type":"BasicTickFormatter"}],"root_ids":["004698f7-b618-40b4-8fc8-334264fac16d"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"85d28036-94e3-4e0e-8341-bfe12c3526f5","elementid":"0427eed2-4cc6-4574-9cb3-1fac80485c1c","modelid":"004698f7-b618-40b4-8fc8-334264fac16d"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});