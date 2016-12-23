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
      };var element = document.getElementById("ca0d0526-ba01-4159-94d9-411ebdd4587c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca0d0526-ba01-4159-94d9-411ebdd4587c' but no matching script tag was found. ")
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
                  var docs_json = {"5b97a32b-76be-46ca-a7c4-89daaf387db3":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e9a58e8-0c1a-4ad5-b104-9fae52b116c7","type":"BasicTicker"}},"id":"23f69fa9-2427-4c17-b360-22f7815ec3e6","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"4201106d-2fad-4614-8c0a-df9656c68603","type":"VBar"},{"attributes":{"data_source":{"id":"4fb5d462-15af-4cde-9082-f6a373ca840b","type":"ColumnDataSource"},"glyph":{"id":"20da3728-8b9a-452e-a465-4bef7ee08a0a","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"3a5b23d4-ba9b-4457-a5dd-66c45b4fcf91","type":"Text"},"selection_glyph":null},"id":"a6803e51-ffac-4891-99a3-abf8b9167020","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"}},"id":"1cc188b6-80fc-4c70-a912-1e0e5566494c","type":"PanTool"},{"attributes":{"callback":null},"id":"e31063e0-b011-48dc-9ad4-df5e5ac29b7d","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3262c2bb-69c1-4afa-b732-b553c55aa26b","type":"HoverTool"},{"id":"b769e261-9d8b-4114-b4c2-15604c5eae74","type":"ResetTool"},{"id":"8dbb91de-3737-455c-be78-4015a0216502","type":"WheelZoomTool"},{"id":"1cc188b6-80fc-4c70-a912-1e0e5566494c","type":"PanTool"}]},"id":"4ee2fe45-ef66-4053-a2bb-f444ebecefa1","type":"Toolbar"},{"attributes":{"plot":{"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"38b07317-54fd-449b-8c98-362f52ab1420","type":"BasicTicker"}},"id":"60ec9ae6-2929-488c-ac2b-ee50b39dd825","type":"Grid"},{"attributes":{"callback":null},"id":"bb732216-49a4-4fd4-9189-5675e3f11efd","type":"DataRange1d"},{"attributes":{"callback":null,"plot":{"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"},"tooltips":[["count","@y"],["score","@x +- 0.5"]]},"id":"3262c2bb-69c1-4afa-b732-b553c55aa26b","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"dfed6d9a-5f51-425e-bc27-ad2363ac7fc5","type":"VBar"},{"attributes":{},"id":"38b07317-54fd-449b-8c98-362f52ab1420","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Rating histogram","text_font_size":{"value":"24pt"}},"id":"e8add68c-387d-4900-a6b2-1dbf16349127","type":"Title"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":6.6},"y":{"value":120}},"id":"20da3728-8b9a-452e-a465-4bef7ee08a0a","type":"Text"},{"attributes":{"below":[{"id":"6f4164f2-26ea-499b-b9e9-a7698929e2de","type":"LinearAxis"}],"left":[{"id":"706f97a3-2fd4-4424-94ad-cd036095961a","type":"LinearAxis"}],"renderers":[{"id":"6f4164f2-26ea-499b-b9e9-a7698929e2de","type":"LinearAxis"},{"id":"60ec9ae6-2929-488c-ac2b-ee50b39dd825","type":"Grid"},{"id":"706f97a3-2fd4-4424-94ad-cd036095961a","type":"LinearAxis"},{"id":"23f69fa9-2427-4c17-b360-22f7815ec3e6","type":"Grid"},{"id":"375ad7c0-a25b-4340-949b-a5e54f14cbd6","type":"GlyphRenderer"},{"id":"a6803e51-ffac-4891-99a3-abf8b9167020","type":"GlyphRenderer"},{"id":"583852eb-129a-4744-8729-403c267fee42","type":"Span"}],"title":{"id":"e8add68c-387d-4900-a6b2-1dbf16349127","type":"Title"},"tool_events":{"id":"401e4de5-fbfc-42f6-a655-515d9e1b7771","type":"ToolEvents"},"toolbar":{"id":"4ee2fe45-ef66-4053-a2bb-f444ebecefa1","type":"Toolbar"},"x_range":{"id":"bb732216-49a4-4fd4-9189-5675e3f11efd","type":"DataRange1d"},"y_range":{"id":"e31063e0-b011-48dc-9ad4-df5e5ac29b7d","type":"DataRange1d"}},"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"401e4de5-fbfc-42f6-a655-515d9e1b7771","type":"ToolEvents"},{"attributes":{},"id":"7a781f2c-7987-48ac-ba53-975e5a71e705","type":"BasicTickFormatter"},{"attributes":{"dimension":"height","line_alpha":{"value":0.85},"line_color":{"value":"red"},"line_width":{"value":3},"location":6.5,"plot":null},"id":"583852eb-129a-4744-8729-403c267fee42","type":"Span"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":6.6},"y":{"value":120}},"id":"3a5b23d4-ba9b-4457-a5dd-66c45b4fcf91","type":"Text"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5],"y":[0,1,6,46,95,132,119,77,18,2]}},"id":"b68df19b-d299-46ef-bfdf-c915216edf7d","type":"ColumnDataSource"},{"attributes":{},"id":"2e9a58e8-0c1a-4ad5-b104-9fae52b116c7","type":"BasicTicker"},{"attributes":{"axis_label":"Count","formatter":{"id":"7e3704a5-f0b8-4c1b-8472-1203b39348bb","type":"BasicTickFormatter"},"plot":{"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e9a58e8-0c1a-4ad5-b104-9fae52b116c7","type":"BasicTicker"}},"id":"706f97a3-2fd4-4424-94ad-cd036095961a","type":"LinearAxis"},{"attributes":{"plot":{"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"}},"id":"8dbb91de-3737-455c-be78-4015a0216502","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"}},"id":"b769e261-9d8b-4114-b4c2-15604c5eae74","type":"ResetTool"},{"attributes":{"data_source":{"id":"b68df19b-d299-46ef-bfdf-c915216edf7d","type":"ColumnDataSource"},"glyph":{"id":"0d952fd7-397b-41cb-9f1d-fc9a1c2383a0","type":"VBar"},"hover_glyph":{"id":"4201106d-2fad-4614-8c0a-df9656c68603","type":"VBar"},"nonselection_glyph":{"id":"dfed6d9a-5f51-425e-bc27-ad2363ac7fc5","type":"VBar"},"selection_glyph":null},"id":"375ad7c0-a25b-4340-949b-a5e54f14cbd6","type":"GlyphRenderer"},{"attributes":{"axis_label":"Score","formatter":{"id":"7a781f2c-7987-48ac-ba53-975e5a71e705","type":"BasicTickFormatter"},"plot":{"id":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"38b07317-54fd-449b-8c98-362f52ab1420","type":"BasicTicker"}},"id":"6f4164f2-26ea-499b-b9e9-a7698929e2de","type":"LinearAxis"},{"attributes":{},"id":"7e3704a5-f0b8-4c1b-8472-1203b39348bb","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"0d952fd7-397b-41cb-9f1d-fc9a1c2383a0","type":"VBar"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["30%"]}},"id":"4fb5d462-15af-4cde-9082-f6a373ca840b","type":"ColumnDataSource"}],"root_ids":["b396374c-f94d-446d-8d7d-77c1b8d9ba4e"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"5b97a32b-76be-46ca-a7c4-89daaf387db3","elementid":"ca0d0526-ba01-4159-94d9-411ebdd4587c","modelid":"b396374c-f94d-446d-8d7d-77c1b8d9ba4e"}];
                  
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