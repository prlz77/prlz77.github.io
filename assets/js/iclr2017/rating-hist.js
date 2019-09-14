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
      };var element = document.getElementById("791fc159-7984-4dff-bd6f-f48a3f265eb0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '791fc159-7984-4dff-bd6f-f48a3f265eb0' but no matching script tag was found. ")
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
                  var docs_json = {"86772088-fd32-4c06-afb5-e7f8567095b0":{"roots":{"references":[{"attributes":{},"id":"63fd0fa7-6f65-4120-b060-e9b0ea1b26b2","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Rating histogram","text_font_size":{"value":"24pt"}},"id":"bae88bfb-3f34-4962-91bd-06db581892c3","type":"Title"},{"attributes":{"below":[{"id":"bf57eef3-23bb-464f-ac24-3a6c4c2826f5","type":"LinearAxis"}],"left":[{"id":"d13bc60b-0897-4b66-a8de-ae170ed89068","type":"LinearAxis"}],"renderers":[{"id":"bf57eef3-23bb-464f-ac24-3a6c4c2826f5","type":"LinearAxis"},{"id":"689e960d-d2bf-490d-bcba-198fee1c4869","type":"Grid"},{"id":"d13bc60b-0897-4b66-a8de-ae170ed89068","type":"LinearAxis"},{"id":"aa910f2b-090c-4872-8e32-9f566ec0c54e","type":"Grid"},{"id":"4f3979a8-5d90-47b3-9d58-1d2dd8153585","type":"GlyphRenderer"},{"id":"52268865-0caa-451b-82fe-6c49210a178f","type":"GlyphRenderer"},{"id":"92d0aa6a-d547-4f81-9c4f-70c61c907735","type":"Span"}],"title":{"id":"bae88bfb-3f34-4962-91bd-06db581892c3","type":"Title"},"tool_events":{"id":"cad3de45-4480-4c2e-ba44-083ab1afc3ec","type":"ToolEvents"},"toolbar":{"id":"4c5dae3d-9412-4708-b5f7-ba486fbf2bfd","type":"Toolbar"},"x_range":{"id":"64f732fb-caf0-41bf-8285-7c2320d1772a","type":"DataRange1d"},"y_range":{"id":"10f8f628-81b6-4b35-aaf6-38c65705b7b1","type":"DataRange1d"}},"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"bb66ec56-5d84-426b-bc9f-cf85fe8ab9a9","type":"VBar"},{"attributes":{},"id":"41ca858f-7df6-4680-84a4-5c21b8f60cd0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["30%"]}},"id":"a0d28ee3-7483-4bd5-926b-1041232f02f7","type":"ColumnDataSource"},{"attributes":{},"id":"b5b97c8c-d57e-4139-a006-aaf3ad88d10b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"10f8f628-81b6-4b35-aaf6-38c65705b7b1","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cadf1cec-de1a-4b10-b7f0-7f71cf507de5","type":"HoverTool"},{"id":"0408eae1-81bd-4e3a-b303-850ec7444974","type":"ResetTool"},{"id":"9306112a-56e0-45bb-a67e-082d2af705a3","type":"WheelZoomTool"},{"id":"c23789c4-8dcc-4165-a9d7-e619d14c29cd","type":"PanTool"}]},"id":"4c5dae3d-9412-4708-b5f7-ba486fbf2bfd","type":"Toolbar"},{"attributes":{},"id":"cad3de45-4480-4c2e-ba44-083ab1afc3ec","type":"ToolEvents"},{"attributes":{"data_source":{"id":"a0d28ee3-7483-4bd5-926b-1041232f02f7","type":"ColumnDataSource"},"glyph":{"id":"354dd6ec-b1e6-461a-b16e-d26d5bb248da","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"e02f3df2-6f2b-4393-8a3c-922b42d28e8c","type":"Text"},"selection_glyph":null},"id":"52268865-0caa-451b-82fe-6c49210a178f","type":"GlyphRenderer"},{"attributes":{"axis_label":"Count","formatter":{"id":"b5b97c8c-d57e-4139-a006-aaf3ad88d10b","type":"BasicTickFormatter"},"plot":{"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"41ca858f-7df6-4680-84a4-5c21b8f60cd0","type":"BasicTicker"}},"id":"d13bc60b-0897-4b66-a8de-ae170ed89068","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"5d62d562-d3e9-4fb2-8e8b-dd47c8107c1b","type":"VBar"},{"attributes":{},"id":"e5614b02-85d3-4f0f-b93f-2fb27eeff74f","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"41ca858f-7df6-4680-84a4-5c21b8f60cd0","type":"BasicTicker"}},"id":"aa910f2b-090c-4872-8e32-9f566ec0c54e","type":"Grid"},{"attributes":{"callback":null},"id":"64f732fb-caf0-41bf-8285-7c2320d1772a","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"13147c01-79f5-4d2c-aee0-53fd10e147ff","type":"VBar"},{"attributes":{"data_source":{"id":"52ea0b2c-78bd-462d-8a9b-9815d4264e03","type":"ColumnDataSource"},"glyph":{"id":"13147c01-79f5-4d2c-aee0-53fd10e147ff","type":"VBar"},"hover_glyph":{"id":"5d62d562-d3e9-4fb2-8e8b-dd47c8107c1b","type":"VBar"},"nonselection_glyph":{"id":"bb66ec56-5d84-426b-bc9f-cf85fe8ab9a9","type":"VBar"},"selection_glyph":null},"id":"4f3979a8-5d90-47b3-9d58-1d2dd8153585","type":"GlyphRenderer"},{"attributes":{"dimension":"height","line_alpha":{"value":0.85},"line_color":{"value":"red"},"line_width":{"value":3},"location":6.5,"plot":null},"id":"92d0aa6a-d547-4f81-9c4f-70c61c907735","type":"Span"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5],"y":[0,1,6,46,95,132,119,77,18,2]}},"id":"52ea0b2c-78bd-462d-8a9b-9815d4264e03","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"}},"id":"9306112a-56e0-45bb-a67e-082d2af705a3","type":"WheelZoomTool"},{"attributes":{"callback":null,"plot":{"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"},"tooltips":[["count","@y"],["score","@x +- 0.5"]]},"id":"cadf1cec-de1a-4b10-b7f0-7f71cf507de5","type":"HoverTool"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":6.6},"y":{"value":120}},"id":"354dd6ec-b1e6-461a-b16e-d26d5bb248da","type":"Text"},{"attributes":{"axis_label":"Score","formatter":{"id":"e5614b02-85d3-4f0f-b93f-2fb27eeff74f","type":"BasicTickFormatter"},"plot":{"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"63fd0fa7-6f65-4120-b060-e9b0ea1b26b2","type":"BasicTicker"}},"id":"bf57eef3-23bb-464f-ac24-3a6c4c2826f5","type":"LinearAxis"},{"attributes":{"plot":{"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"}},"id":"c23789c4-8dcc-4165-a9d7-e619d14c29cd","type":"PanTool"},{"attributes":{"plot":{"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"}},"id":"0408eae1-81bd-4e3a-b303-850ec7444974","type":"ResetTool"},{"attributes":{"plot":{"id":"80105587-b683-4b25-b26f-4cc97cc5c7f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"63fd0fa7-6f65-4120-b060-e9b0ea1b26b2","type":"BasicTicker"}},"id":"689e960d-d2bf-490d-bcba-198fee1c4869","type":"Grid"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":6.6},"y":{"value":120}},"id":"e02f3df2-6f2b-4393-8a3c-922b42d28e8c","type":"Text"}],"root_ids":["80105587-b683-4b25-b26f-4cc97cc5c7f7"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"86772088-fd32-4c06-afb5-e7f8567095b0","elementid":"791fc159-7984-4dff-bd6f-f48a3f265eb0","modelid":"80105587-b683-4b25-b26f-4cc97cc5c7f7"}];
                  
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