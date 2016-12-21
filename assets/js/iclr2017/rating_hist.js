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
      };var element = document.getElementById("55ce223f-d6b9-4790-81b1-2832529ce50d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '55ce223f-d6b9-4790-81b1-2832529ce50d' but no matching script tag was found. ")
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
                  var docs_json = {"83fe3801-7e67-4723-a264-c10924e86084":{"roots":{"references":[{"attributes":{"callback":null},"id":"b3bd55f7-ee53-4c8a-9cf5-cf143a96466b","type":"DataRange1d"},{"attributes":{},"id":"12b09bf9-4794-4a20-bc69-f4d36e1982d7","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"343ddf27-c05b-47ec-81dc-e076ccad3e18","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"7ae27013-64d4-4b17-97d1-158a80ea6d15","type":"VBar"},{"attributes":{},"id":"45f8666b-d9c6-451b-bff6-959164fb684d","type":"ToolEvents"},{"attributes":{"data_source":{"id":"4af21a42-7505-485a-b805-bf311bdbb045","type":"ColumnDataSource"},"glyph":{"id":"874c8bd9-df1f-447d-9c7a-4ddc21438461","type":"VBar"},"hover_glyph":{"id":"343ddf27-c05b-47ec-81dc-e076ccad3e18","type":"VBar"},"nonselection_glyph":{"id":"7ae27013-64d4-4b17-97d1-158a80ea6d15","type":"VBar"},"selection_glyph":null},"id":"95bfef18-e006-4c96-a11e-f1c8606237e6","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3901efff-9a25-45d3-9af5-295cbb8a4a3c","type":"HoverTool"},{"id":"88d214a9-5d19-4ad9-b2b4-6806e63ddeb7","type":"WheelZoomTool"},{"id":"ba1da876-4dec-49d4-a0a9-241dff9eed90","type":"PanTool"}]},"id":"c39701cb-668b-4100-a121-58f87df79834","type":"Toolbar"},{"attributes":{"plot":{"id":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b87dc41-0149-4a9b-88b4-fa0db0ba6ec8","type":"BasicTicker"}},"id":"506a1d9c-1aeb-432d-a632-bf578d75c48d","type":"Grid"},{"attributes":{"axis_label":"Score","formatter":{"id":"a982beaf-cad6-4c55-9f0e-7529470776eb","type":"BasicTickFormatter"},"plot":{"id":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b87dc41-0149-4a9b-88b4-fa0db0ba6ec8","type":"BasicTicker"}},"id":"c12ebf6c-e6bb-4e1a-9311-e3f2fd12ba58","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Rating histogram","text_font_size":{"value":"24pt"}},"id":"cf3f1571-9eee-4241-b791-db87c4f61dd2","type":"Title"},{"attributes":{},"id":"461f0bdf-77d7-4947-acbd-1632a322a338","type":"BasicTicker"},{"attributes":{"plot":{"id":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd","subtype":"Figure","type":"Plot"}},"id":"88d214a9-5d19-4ad9-b2b4-6806e63ddeb7","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"461f0bdf-77d7-4947-acbd-1632a322a338","type":"BasicTicker"}},"id":"94de8234-94d0-4aa3-a6ac-2e19b9b7287c","type":"Grid"},{"attributes":{},"id":"a982beaf-cad6-4c55-9f0e-7529470776eb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"plot":{"id":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd","subtype":"Figure","type":"Plot"},"tooltips":[["count","@y"],["score","@x +- 0.5"]]},"id":"3901efff-9a25-45d3-9af5-295cbb8a4a3c","type":"HoverTool"},{"attributes":{"data_source":{"id":"0b6cd194-f8d9-4ba2-b18f-dc9a6307ab26","type":"ColumnDataSource"},"glyph":{"id":"649e4581-7003-44f5-9746-b5a61e4b1028","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"2def0fd9-b1ef-4750-962b-9cd5a90a34ec","type":"Text"},"selection_glyph":null},"id":"3c43764f-c651-4dd0-a58f-69c1c902df2f","type":"GlyphRenderer"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":86}},"id":"2def0fd9-b1ef-4750-962b-9cd5a90a34ec","type":"Text"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"874c8bd9-df1f-447d-9c7a-4ddc21438461","type":"VBar"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["20%"]}},"id":"0b6cd194-f8d9-4ba2-b18f-dc9a6307ab26","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"c12ebf6c-e6bb-4e1a-9311-e3f2fd12ba58","type":"LinearAxis"}],"left":[{"id":"2d91eb39-5a24-4fe4-af23-f4ea0a968e10","type":"LinearAxis"}],"renderers":[{"id":"c12ebf6c-e6bb-4e1a-9311-e3f2fd12ba58","type":"LinearAxis"},{"id":"506a1d9c-1aeb-432d-a632-bf578d75c48d","type":"Grid"},{"id":"2d91eb39-5a24-4fe4-af23-f4ea0a968e10","type":"LinearAxis"},{"id":"94de8234-94d0-4aa3-a6ac-2e19b9b7287c","type":"Grid"},{"id":"95bfef18-e006-4c96-a11e-f1c8606237e6","type":"GlyphRenderer"},{"id":"3c43764f-c651-4dd0-a58f-69c1c902df2f","type":"GlyphRenderer"},{"id":"f112b884-92c2-4ce5-8659-6baf88ac3e28","type":"Span"}],"title":{"id":"cf3f1571-9eee-4241-b791-db87c4f61dd2","type":"Title"},"tool_events":{"id":"45f8666b-d9c6-451b-bff6-959164fb684d","type":"ToolEvents"},"toolbar":{"id":"c39701cb-668b-4100-a121-58f87df79834","type":"Toolbar"},"x_range":{"id":"79c28600-d39c-41fd-be7e-dc5df1f10fd9","type":"DataRange1d"},"y_range":{"id":"b3bd55f7-ee53-4c8a-9cf5-cf143a96466b","type":"DataRange1d"}},"id":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd","subtype":"Figure","type":"Plot"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":86}},"id":"649e4581-7003-44f5-9746-b5a61e4b1028","type":"Text"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5],"y":[0,0,5,46,97,112,115,85,22,3]}},"id":"4af21a42-7505-485a-b805-bf311bdbb045","type":"ColumnDataSource"},{"attributes":{"axis_label":"Count","formatter":{"id":"12b09bf9-4794-4a20-bc69-f4d36e1982d7","type":"BasicTickFormatter"},"plot":{"id":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"461f0bdf-77d7-4947-acbd-1632a322a338","type":"BasicTicker"}},"id":"2d91eb39-5a24-4fe4-af23-f4ea0a968e10","type":"LinearAxis"},{"attributes":{"callback":null},"id":"79c28600-d39c-41fd-be7e-dc5df1f10fd9","type":"DataRange1d"},{"attributes":{"dimension":"height","line_alpha":{"value":0.85},"line_color":{"value":"red"},"line_width":{"value":3},"location":7.5,"plot":null},"id":"f112b884-92c2-4ce5-8659-6baf88ac3e28","type":"Span"},{"attributes":{},"id":"7b87dc41-0149-4a9b-88b4-fa0db0ba6ec8","type":"BasicTicker"},{"attributes":{"plot":{"id":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd","subtype":"Figure","type":"Plot"}},"id":"ba1da876-4dec-49d4-a0a9-241dff9eed90","type":"PanTool"}],"root_ids":["6be3a04b-5eb1-4e66-9460-42b4be58d6bd"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"83fe3801-7e67-4723-a264-c10924e86084","elementid":"55ce223f-d6b9-4790-81b1-2832529ce50d","modelid":"6be3a04b-5eb1-4e66-9460-42b4be58d6bd"}];
                  
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