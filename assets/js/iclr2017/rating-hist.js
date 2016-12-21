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
      };var element = document.getElementById("82cddfd7-1923-46fb-aa4d-692e104ef776");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '82cddfd7-1923-46fb-aa4d-692e104ef776' but no matching script tag was found. ")
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
                  var docs_json = {"e2dae62c-d5e9-47bf-9134-1ebbd37f5bef":{"roots":{"references":[{"attributes":{"plot":{"id":"76991882-d756-47c6-8308-b71820c4052a","subtype":"Figure","type":"Plot"}},"id":"220736ad-e11a-4b2b-98ae-e10181b234a7","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"790f7f02-8d5a-44c2-bb0c-eb8c33abfcbc","type":"VBar"},{"attributes":{"axis_label":"Score","formatter":{"id":"be419f25-3eea-4f79-a66c-78c034ea26bb","type":"BasicTickFormatter"},"plot":{"id":"76991882-d756-47c6-8308-b71820c4052a","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc696617-d0fe-4546-9186-4e0b00dc14c7","type":"BasicTicker"}},"id":"84144aba-a03f-456d-af26-39a70287616b","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"3baf8318-1f61-414b-8b7b-10f000ba616c","type":"VBar"},{"attributes":{},"id":"fc696617-d0fe-4546-9186-4e0b00dc14c7","type":"BasicTicker"},{"attributes":{},"id":"10d760ed-a6dd-4b9d-8211-c9fa31fa36e7","type":"ToolEvents"},{"attributes":{"axis_label":"Count","formatter":{"id":"40031c63-73ac-45bb-aaca-cf0b29f653d0","type":"BasicTickFormatter"},"plot":{"id":"76991882-d756-47c6-8308-b71820c4052a","subtype":"Figure","type":"Plot"},"ticker":{"id":"873f22ae-53b8-4c0a-9a5f-6cbd77161f4e","type":"BasicTicker"}},"id":"5f203a5c-fcb7-4694-b8f0-0002e7d291c8","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["20%"]}},"id":"3515cb79-5cc0-443d-9f72-7ca542852515","type":"ColumnDataSource"},{"attributes":{},"id":"40031c63-73ac-45bb-aaca-cf0b29f653d0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"plot":{"id":"76991882-d756-47c6-8308-b71820c4052a","subtype":"Figure","type":"Plot"},"tooltips":[["count","@y"],["score","@x +- 0.5"]]},"id":"3d9f2c70-4c2d-4d7c-930c-d4610a691905","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"680520fe-42c8-4fb4-98f2-f1a6e80bc08c","type":"VBar"},{"attributes":{"callback":null},"id":"8f7d68ee-0d9d-4ddf-8c16-f3bcba89db83","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"76991882-d756-47c6-8308-b71820c4052a","subtype":"Figure","type":"Plot"},"ticker":{"id":"873f22ae-53b8-4c0a-9a5f-6cbd77161f4e","type":"BasicTicker"}},"id":"6bc2324d-03e1-4501-89f6-eba766603a80","type":"Grid"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":86}},"id":"735eaec9-4334-4040-8c7e-4f6c8a34088c","type":"Text"},{"attributes":{"below":[{"id":"84144aba-a03f-456d-af26-39a70287616b","type":"LinearAxis"}],"left":[{"id":"5f203a5c-fcb7-4694-b8f0-0002e7d291c8","type":"LinearAxis"}],"renderers":[{"id":"84144aba-a03f-456d-af26-39a70287616b","type":"LinearAxis"},{"id":"6077505f-a9a5-4193-88be-50e270357f12","type":"Grid"},{"id":"5f203a5c-fcb7-4694-b8f0-0002e7d291c8","type":"LinearAxis"},{"id":"6bc2324d-03e1-4501-89f6-eba766603a80","type":"Grid"},{"id":"b8428f92-4e66-4144-9238-f91f86550796","type":"GlyphRenderer"},{"id":"dd004674-edd0-44f6-b835-ea5046b64ef9","type":"GlyphRenderer"},{"id":"5d67173a-4e8a-4225-bd56-d37ec21d08c4","type":"Span"}],"title":{"id":"646dcd2a-c8cf-4068-b77b-282334edef6e","type":"Title"},"tool_events":{"id":"10d760ed-a6dd-4b9d-8211-c9fa31fa36e7","type":"ToolEvents"},"toolbar":{"id":"33d23b23-ad75-4d4e-989a-6a8feb73b3b9","type":"Toolbar"},"x_range":{"id":"baa7373c-cecc-4460-b0ff-6bd89c63fcc6","type":"DataRange1d"},"y_range":{"id":"8f7d68ee-0d9d-4ddf-8c16-f3bcba89db83","type":"DataRange1d"}},"id":"76991882-d756-47c6-8308-b71820c4052a","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3d9f2c70-4c2d-4d7c-930c-d4610a691905","type":"HoverTool"},{"id":"220736ad-e11a-4b2b-98ae-e10181b234a7","type":"WheelZoomTool"},{"id":"a0486720-1929-4c05-af8d-3adb2e888d29","type":"PanTool"}]},"id":"33d23b23-ad75-4d4e-989a-6a8feb73b3b9","type":"Toolbar"},{"attributes":{"plot":{"id":"76991882-d756-47c6-8308-b71820c4052a","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc696617-d0fe-4546-9186-4e0b00dc14c7","type":"BasicTicker"}},"id":"6077505f-a9a5-4193-88be-50e270357f12","type":"Grid"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":86}},"id":"ca48474c-074a-4b80-a0c5-31b70873094c","type":"Text"},{"attributes":{"data_source":{"id":"40d972a5-a17e-4556-9381-c7f0003fa92f","type":"ColumnDataSource"},"glyph":{"id":"3baf8318-1f61-414b-8b7b-10f000ba616c","type":"VBar"},"hover_glyph":{"id":"790f7f02-8d5a-44c2-bb0c-eb8c33abfcbc","type":"VBar"},"nonselection_glyph":{"id":"680520fe-42c8-4fb4-98f2-f1a6e80bc08c","type":"VBar"},"selection_glyph":null},"id":"b8428f92-4e66-4144-9238-f91f86550796","type":"GlyphRenderer"},{"attributes":{},"id":"873f22ae-53b8-4c0a-9a5f-6cbd77161f4e","type":"BasicTicker"},{"attributes":{"plot":{"id":"76991882-d756-47c6-8308-b71820c4052a","subtype":"Figure","type":"Plot"}},"id":"a0486720-1929-4c05-af8d-3adb2e888d29","type":"PanTool"},{"attributes":{"dimension":"height","line_alpha":{"value":0.85},"line_color":{"value":"red"},"line_width":{"value":3},"location":7.5,"plot":null},"id":"5d67173a-4e8a-4225-bd56-d37ec21d08c4","type":"Span"},{"attributes":{"callback":null},"id":"baa7373c-cecc-4460-b0ff-6bd89c63fcc6","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3515cb79-5cc0-443d-9f72-7ca542852515","type":"ColumnDataSource"},"glyph":{"id":"735eaec9-4334-4040-8c7e-4f6c8a34088c","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"ca48474c-074a-4b80-a0c5-31b70873094c","type":"Text"},"selection_glyph":null},"id":"dd004674-edd0-44f6-b835-ea5046b64ef9","type":"GlyphRenderer"},{"attributes":{},"id":"be419f25-3eea-4f79-a66c-78c034ea26bb","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Rating histogram","text_font_size":{"value":"24pt"}},"id":"646dcd2a-c8cf-4068-b77b-282334edef6e","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5],"y":[0,0,5,46,97,112,115,85,22,3]}},"id":"40d972a5-a17e-4556-9381-c7f0003fa92f","type":"ColumnDataSource"}],"root_ids":["76991882-d756-47c6-8308-b71820c4052a"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"e2dae62c-d5e9-47bf-9134-1ebbd37f5bef","elementid":"82cddfd7-1923-46fb-aa4d-692e104ef776","modelid":"76991882-d756-47c6-8308-b71820c4052a"}];
                  
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