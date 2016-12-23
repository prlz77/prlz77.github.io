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
      };var element = document.getElementById("91db9b9a-d612-452b-8081-c287a068c75f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91db9b9a-d612-452b-8081-c287a068c75f' but no matching script tag was found. ")
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
                  var docs_json = {"dabaaf26-ac36-47e9-b0da-514f19d92793":{"roots":{"references":[{"attributes":{"plot":{"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"}},"id":"c95a0514-7c39-48c8-9048-c7642c8a2d97","type":"PanTool"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":78}},"id":"c2d30c89-d8ff-4658-855a-83b38292cb8e","type":"Text"},{"attributes":{"callback":null},"id":"a109f37d-e6eb-4220-bdef-7784a1eb4f59","type":"DataRange1d"},{"attributes":{"callback":null,"plot":{"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"},"tooltips":[["count","@y"],["score","@x +- 0.5"]]},"id":"a2f4edce-da04-4b73-ba8e-31fa9983368a","type":"HoverTool"},{"attributes":{"plot":{"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"},"ticker":{"id":"09ec3f87-cee7-4715-ba9e-c3e3b9375d7f","type":"BasicTicker"}},"id":"7246ff66-3258-4136-9977-7bb1088161a7","type":"Grid"},{"attributes":{"axis_label":"Score","formatter":{"id":"8fbaf56a-69b6-4a4b-b9a3-7f4ed5e175e1","type":"BasicTickFormatter"},"plot":{"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"},"ticker":{"id":"09ec3f87-cee7-4715-ba9e-c3e3b9375d7f","type":"BasicTicker"}},"id":"e416ac23-d275-49db-80a7-9d7094015058","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"87343e17-f616-4606-b26d-7494867f7534","type":"VBar"},{"attributes":{"callback":null},"id":"47292192-7d4b-4e16-b82c-788e207c0724","type":"DataRange1d"},{"attributes":{},"id":"0e01c657-57ba-481c-8d80-7276aea0159c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["30%"]}},"id":"b8694d6b-8f38-4af4-854a-20897733b022","type":"ColumnDataSource"},{"attributes":{"axis_label":"Count","formatter":{"id":"0e01c657-57ba-481c-8d80-7276aea0159c","type":"BasicTickFormatter"},"plot":{"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3b65e1b-c001-4f71-9684-c8379ce88eea","type":"BasicTicker"}},"id":"777077b0-d4f5-4591-86e5-732a3e8cfc6d","type":"LinearAxis"},{"attributes":{},"id":"09ec3f87-cee7-4715-ba9e-c3e3b9375d7f","type":"BasicTicker"},{"attributes":{},"id":"c3b65e1b-c001-4f71-9684-c8379ce88eea","type":"BasicTicker"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":78}},"id":"0054d1bc-85d2-4da5-87b0-df4a601b6548","type":"Text"},{"attributes":{"dimension":"height","line_alpha":{"value":0.85},"line_color":{"value":"red"},"line_width":{"value":3},"location":6.5,"plot":null},"id":"956e4fd1-d811-46af-b925-a25c98b62383","type":"Span"},{"attributes":{"data_source":{"id":"b8694d6b-8f38-4af4-854a-20897733b022","type":"ColumnDataSource"},"glyph":{"id":"0054d1bc-85d2-4da5-87b0-df4a601b6548","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"c2d30c89-d8ff-4658-855a-83b38292cb8e","type":"Text"},"selection_glyph":null},"id":"175dfc23-c55a-4c62-97ca-0d80ec1296b0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"637cc59f-d035-4acf-9ad2-563ef8f4f008","type":"ColumnDataSource"},"glyph":{"id":"87343e17-f616-4606-b26d-7494867f7534","type":"VBar"},"hover_glyph":{"id":"535382d2-f583-4a6a-b294-edf51fb2b74f","type":"VBar"},"nonselection_glyph":{"id":"2ea8771f-f520-46e0-8280-1e4d524e72a2","type":"VBar"},"selection_glyph":null},"id":"d1737d10-2834-46df-bd21-9e47855102a5","type":"GlyphRenderer"},{"attributes":{},"id":"8fbaf56a-69b6-4a4b-b9a3-7f4ed5e175e1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"}},"id":"6983ce6f-1b1e-4c5c-a179-d5218d01a7d6","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5],"y":[0,1,6,46,95,132,119,77,18,2]}},"id":"637cc59f-d035-4acf-9ad2-563ef8f4f008","type":"ColumnDataSource"},{"attributes":{},"id":"0f62901a-eff9-4e02-8c53-2a8537008586","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3b65e1b-c001-4f71-9684-c8379ce88eea","type":"BasicTicker"}},"id":"4b094bd1-c614-4b2d-8c9d-432758abb84e","type":"Grid"},{"attributes":{"plot":null,"text":"Rating histogram","text_font_size":{"value":"24pt"}},"id":"5afab85f-7412-4fb5-920c-20f4fa893158","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"2ea8771f-f520-46e0-8280-1e4d524e72a2","type":"VBar"},{"attributes":{"below":[{"id":"e416ac23-d275-49db-80a7-9d7094015058","type":"LinearAxis"}],"left":[{"id":"777077b0-d4f5-4591-86e5-732a3e8cfc6d","type":"LinearAxis"}],"renderers":[{"id":"e416ac23-d275-49db-80a7-9d7094015058","type":"LinearAxis"},{"id":"7246ff66-3258-4136-9977-7bb1088161a7","type":"Grid"},{"id":"777077b0-d4f5-4591-86e5-732a3e8cfc6d","type":"LinearAxis"},{"id":"4b094bd1-c614-4b2d-8c9d-432758abb84e","type":"Grid"},{"id":"d1737d10-2834-46df-bd21-9e47855102a5","type":"GlyphRenderer"},{"id":"175dfc23-c55a-4c62-97ca-0d80ec1296b0","type":"GlyphRenderer"},{"id":"956e4fd1-d811-46af-b925-a25c98b62383","type":"Span"}],"title":{"id":"5afab85f-7412-4fb5-920c-20f4fa893158","type":"Title"},"tool_events":{"id":"0f62901a-eff9-4e02-8c53-2a8537008586","type":"ToolEvents"},"toolbar":{"id":"4ceeaf9f-523a-4f82-9932-7de799a18e24","type":"Toolbar"},"x_range":{"id":"47292192-7d4b-4e16-b82c-788e207c0724","type":"DataRange1d"},"y_range":{"id":"a109f37d-e6eb-4220-bdef-7784a1eb4f59","type":"DataRange1d"}},"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"535382d2-f583-4a6a-b294-edf51fb2b74f","type":"VBar"},{"attributes":{"plot":{"id":"75c51c3d-e35c-4c34-8fea-a5da3840f270","subtype":"Figure","type":"Plot"}},"id":"6254d4d2-70cd-4d18-8a2e-9910cdb08ada","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a2f4edce-da04-4b73-ba8e-31fa9983368a","type":"HoverTool"},{"id":"6254d4d2-70cd-4d18-8a2e-9910cdb08ada","type":"ResetTool"},{"id":"6983ce6f-1b1e-4c5c-a179-d5218d01a7d6","type":"WheelZoomTool"},{"id":"c95a0514-7c39-48c8-9048-c7642c8a2d97","type":"PanTool"}]},"id":"4ceeaf9f-523a-4f82-9932-7de799a18e24","type":"Toolbar"}],"root_ids":["75c51c3d-e35c-4c34-8fea-a5da3840f270"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"dabaaf26-ac36-47e9-b0da-514f19d92793","elementid":"91db9b9a-d612-452b-8081-c287a068c75f","modelid":"75c51c3d-e35c-4c34-8fea-a5da3840f270"}];
                  
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