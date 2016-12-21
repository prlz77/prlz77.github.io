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
      };var element = document.getElementById("15c2f9bf-b0b7-4fae-b1c3-284f975cf6e0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '15c2f9bf-b0b7-4fae-b1c3-284f975cf6e0' but no matching script tag was found. ")
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
                  var docs_json = {"235570e8-0fc6-4792-a523-b0719b3e842a":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5],"y":[0,1,6,46,95,132,119,77,18,2]}},"id":"1ebc61e1-a257-474d-aa82-03f7f57c46bb","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e28f063b-8a90-49aa-9c1f-de42f31abc40","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["20%"]}},"id":"f3ef8be2-fad8-4cb4-9c67-6cad91ad81a7","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"41356e9c-9cb4-4f30-9b38-6cac8ff54cf8","type":"DataRange1d"},{"attributes":{"dimension":"height","line_alpha":{"value":0.85},"line_color":{"value":"red"},"line_width":{"value":3},"location":7.5,"plot":null},"id":"2145c842-d4cc-438e-84d0-77befbb0de7c","type":"Span"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"e85729fd-5864-47f6-900d-b0cb0e04fa7e","type":"VBar"},{"attributes":{"plot":{"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"}},"id":"b8e08fb4-fd41-4c0b-9a00-c2d85f179dee","type":"WheelZoomTool"},{"attributes":{"callback":null,"plot":{"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"},"tooltips":[["count","@y"],["score","@x +- 0.5"]]},"id":"106d12e8-6d08-448a-9c42-6f7c74c9561b","type":"HoverTool"},{"attributes":{},"id":"0fb17abf-9c9f-47fd-a910-73a064b53e84","type":"ToolEvents"},{"attributes":{"data_source":{"id":"1ebc61e1-a257-474d-aa82-03f7f57c46bb","type":"ColumnDataSource"},"glyph":{"id":"e85729fd-5864-47f6-900d-b0cb0e04fa7e","type":"VBar"},"hover_glyph":{"id":"60effbbc-4ac8-431b-ab18-38153817ccde","type":"VBar"},"nonselection_glyph":{"id":"8648012d-8a4e-4602-b45f-a1873a94b5f6","type":"VBar"},"selection_glyph":null},"id":"89ae830e-bd3c-48d1-87d2-a5228253b692","type":"GlyphRenderer"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":78}},"id":"e39f017b-788c-4572-a8d7-23cd17f0583a","type":"Text"},{"attributes":{"plot":{"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"34dc2ec4-b4c5-4029-9ce0-1e22f2e3fc1b","type":"BasicTicker"}},"id":"89a3c429-ce24-4cc9-a12a-d22835551cd9","type":"Grid"},{"attributes":{"plot":null,"text":"Rating histogram","text_font_size":{"value":"24pt"}},"id":"8865ee40-7bf0-42ba-b1c7-0b7ee7aa8319","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"106d12e8-6d08-448a-9c42-6f7c74c9561b","type":"HoverTool"},{"id":"a0b3396a-c932-4197-a530-2cdbbd0a0f42","type":"ResetTool"},{"id":"b8e08fb4-fd41-4c0b-9a00-c2d85f179dee","type":"WheelZoomTool"},{"id":"ef8800a7-e91f-4b4b-bb66-4f901b212e19","type":"PanTool"}]},"id":"d183e8b7-da15-4c92-aaed-79221fc01f9b","type":"Toolbar"},{"attributes":{"data_source":{"id":"f3ef8be2-fad8-4cb4-9c67-6cad91ad81a7","type":"ColumnDataSource"},"glyph":{"id":"76ff4f3c-21a1-4800-a847-f33724e75d5d","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"e39f017b-788c-4572-a8d7-23cd17f0583a","type":"Text"},"selection_glyph":null},"id":"27a6f373-c773-4233-b471-8c04793031aa","type":"GlyphRenderer"},{"attributes":{"axis_label":"Count","formatter":{"id":"955c558a-8131-4bf6-af58-aadb1aff63f4","type":"BasicTickFormatter"},"plot":{"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e822a1b-ea77-494b-9186-5c2776a39956","type":"BasicTicker"}},"id":"dfcfffc5-32ca-4fa9-bf3c-013f95e6239b","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e822a1b-ea77-494b-9186-5c2776a39956","type":"BasicTicker"}},"id":"1bbc68a5-f089-44cf-a6bd-547f53b207e6","type":"Grid"},{"attributes":{"plot":{"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"}},"id":"ef8800a7-e91f-4b4b-bb66-4f901b212e19","type":"PanTool"},{"attributes":{"plot":{"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"}},"id":"a0b3396a-c932-4197-a530-2cdbbd0a0f42","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"60effbbc-4ac8-431b-ab18-38153817ccde","type":"VBar"},{"attributes":{"axis_label":"Score","formatter":{"id":"cce16724-c3b9-47c4-9c9e-fe94f6e3b3be","type":"BasicTickFormatter"},"plot":{"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"34dc2ec4-b4c5-4029-9ce0-1e22f2e3fc1b","type":"BasicTicker"}},"id":"1c43aba2-68d7-462e-abec-b976548e30b5","type":"LinearAxis"},{"attributes":{},"id":"cce16724-c3b9-47c4-9c9e-fe94f6e3b3be","type":"BasicTickFormatter"},{"attributes":{},"id":"34dc2ec4-b4c5-4029-9ce0-1e22f2e3fc1b","type":"BasicTicker"},{"attributes":{"below":[{"id":"1c43aba2-68d7-462e-abec-b976548e30b5","type":"LinearAxis"}],"left":[{"id":"dfcfffc5-32ca-4fa9-bf3c-013f95e6239b","type":"LinearAxis"}],"renderers":[{"id":"1c43aba2-68d7-462e-abec-b976548e30b5","type":"LinearAxis"},{"id":"89a3c429-ce24-4cc9-a12a-d22835551cd9","type":"Grid"},{"id":"dfcfffc5-32ca-4fa9-bf3c-013f95e6239b","type":"LinearAxis"},{"id":"1bbc68a5-f089-44cf-a6bd-547f53b207e6","type":"Grid"},{"id":"89ae830e-bd3c-48d1-87d2-a5228253b692","type":"GlyphRenderer"},{"id":"27a6f373-c773-4233-b471-8c04793031aa","type":"GlyphRenderer"},{"id":"2145c842-d4cc-438e-84d0-77befbb0de7c","type":"Span"}],"title":{"id":"8865ee40-7bf0-42ba-b1c7-0b7ee7aa8319","type":"Title"},"tool_events":{"id":"0fb17abf-9c9f-47fd-a910-73a064b53e84","type":"ToolEvents"},"toolbar":{"id":"d183e8b7-da15-4c92-aaed-79221fc01f9b","type":"Toolbar"},"x_range":{"id":"e28f063b-8a90-49aa-9c1f-de42f31abc40","type":"DataRange1d"},"y_range":{"id":"41356e9c-9cb4-4f30-9b38-6cac8ff54cf8","type":"DataRange1d"}},"id":"df3ba0bf-b579-4182-a48b-449aaabbd7e5","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"8648012d-8a4e-4602-b45f-a1873a94b5f6","type":"VBar"},{"attributes":{},"id":"9e822a1b-ea77-494b-9186-5c2776a39956","type":"BasicTicker"},{"attributes":{},"id":"955c558a-8131-4bf6-af58-aadb1aff63f4","type":"BasicTickFormatter"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":78}},"id":"76ff4f3c-21a1-4800-a847-f33724e75d5d","type":"Text"}],"root_ids":["df3ba0bf-b579-4182-a48b-449aaabbd7e5"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"235570e8-0fc6-4792-a523-b0719b3e842a","elementid":"15c2f9bf-b0b7-4fae-b1c3-284f975cf6e0","modelid":"df3ba0bf-b579-4182-a48b-449aaabbd7e5"}];
                  
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