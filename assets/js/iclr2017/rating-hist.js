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
      };var element = document.getElementById("3e77bc2b-091a-4cca-ae99-10c6cb062487");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3e77bc2b-091a-4cca-ae99-10c6cb062487' but no matching script tag was found. ")
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
                  var docs_json = {"592929a6-2a9e-4b17-83a6-256a64e27f49":{"roots":{"references":[{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":86}},"id":"528ddc17-387f-4aac-bdae-e91259dd9458","type":"Text"},{"attributes":{"plot":null,"text":"Rating histogram","text_font_size":{"value":"24pt"}},"id":"a9509488-044a-4582-8a7e-26d645c61c04","type":"Title"},{"attributes":{"callback":null,"plot":{"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"},"tooltips":[["count","@y"],["score","@x +- 0.5"]]},"id":"1df5a42d-4e6b-40f8-8f50-c6e9b2fb71e3","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["text"],"data":{"text":["20%"]}},"id":"18598c1b-2644-4fce-aa64-913e8c75e444","type":"ColumnDataSource"},{"attributes":{"dimension":"height","line_alpha":{"value":0.85},"line_color":{"value":"red"},"line_width":{"value":3},"location":7.5,"plot":null},"id":"bb110d80-1ff6-466b-8a81-c194d346eab2","type":"Span"},{"attributes":{"data_source":{"id":"ff305ddd-d761-4b0a-9bba-c68961a843a2","type":"ColumnDataSource"},"glyph":{"id":"7b8d5706-5f8f-486c-bcc3-581abdb888c1","type":"VBar"},"hover_glyph":{"id":"70c8aeba-984a-48f5-8a6d-5a930067342b","type":"VBar"},"nonselection_glyph":{"id":"fe91933c-d49e-45cd-9a46-46c0734f49f4","type":"VBar"},"selection_glyph":null},"id":"ea0ab768-f2ed-4fd9-86c3-f42645ecf34d","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"4ca0b39b-676f-4fae-bd89-9a15edfaf644","type":"LinearAxis"}],"left":[{"id":"324a965e-adae-4bce-bbae-a46da03fa6b3","type":"LinearAxis"}],"renderers":[{"id":"4ca0b39b-676f-4fae-bd89-9a15edfaf644","type":"LinearAxis"},{"id":"e5a07f1d-8d00-47ef-a024-d24b1909f310","type":"Grid"},{"id":"324a965e-adae-4bce-bbae-a46da03fa6b3","type":"LinearAxis"},{"id":"13483068-a52e-4473-9651-1b3bfd384bb2","type":"Grid"},{"id":"ea0ab768-f2ed-4fd9-86c3-f42645ecf34d","type":"GlyphRenderer"},{"id":"2b16bff3-6738-4491-bc8c-9d7a36ed7cbe","type":"GlyphRenderer"},{"id":"bb110d80-1ff6-466b-8a81-c194d346eab2","type":"Span"}],"title":{"id":"a9509488-044a-4582-8a7e-26d645c61c04","type":"Title"},"tool_events":{"id":"e4594e91-0cad-4761-be78-ac0755d93f40","type":"ToolEvents"},"toolbar":{"id":"ba911c76-a31a-4aeb-b947-86c8b1de6145","type":"Toolbar"},"x_range":{"id":"fc32c1c5-c69a-4d9c-a791-636a09bb1a82","type":"DataRange1d"},"y_range":{"id":"477ec1a6-86e7-449a-b724-83986232c466","type":"DataRange1d"}},"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a0447e53-8518-4727-86ca-8a765294541f","type":"BasicTicker"},{"attributes":{"plot":{"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"}},"id":"76d64b82-bade-48ac-a460-4bb41e5fab28","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"70c8aeba-984a-48f5-8a6d-5a930067342b","type":"VBar"},{"attributes":{"data_source":{"id":"18598c1b-2644-4fce-aa64-913e8c75e444","type":"ColumnDataSource"},"glyph":{"id":"3255f52c-c5a7-4359-b932-d9b2d8e4aaef","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"528ddc17-387f-4aac-bdae-e91259dd9458","type":"Text"},"selection_glyph":null},"id":"2b16bff3-6738-4491-bc8c-9d7a36ed7cbe","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1df5a42d-4e6b-40f8-8f50-c6e9b2fb71e3","type":"HoverTool"},{"id":"d9225ed0-34b5-4599-8020-0bb8599bb7f7","type":"ResetTool"},{"id":"76d64b82-bade-48ac-a460-4bb41e5fab28","type":"WheelZoomTool"},{"id":"16c6d72c-0a79-4d1c-83cb-47feda508bec","type":"PanTool"}]},"id":"ba911c76-a31a-4aeb-b947-86c8b1de6145","type":"Toolbar"},{"attributes":{"axis_label":"Score","formatter":{"id":"9298c346-e27e-49e9-8218-3e3b31c5b32d","type":"BasicTickFormatter"},"plot":{"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6819cd23-601a-4a54-b6d5-8bdd71c797de","type":"BasicTicker"}},"id":"4ca0b39b-676f-4fae-bd89-9a15edfaf644","type":"LinearAxis"},{"attributes":{"callback":null},"id":"fc32c1c5-c69a-4d9c-a791-636a09bb1a82","type":"DataRange1d"},{"attributes":{},"id":"9298c346-e27e-49e9-8218-3e3b31c5b32d","type":"BasicTickFormatter"},{"attributes":{},"id":"e4594e91-0cad-4761-be78-ac0755d93f40","type":"ToolEvents"},{"attributes":{"plot":{"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"}},"id":"16c6d72c-0a79-4d1c-83cb-47feda508bec","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5],"y":[0,0,5,46,97,112,115,85,22,3]}},"id":"ff305ddd-d761-4b0a-9bba-c68961a843a2","type":"ColumnDataSource"},{"attributes":{},"id":"6819cd23-601a-4a54-b6d5-8bdd71c797de","type":"BasicTicker"},{"attributes":{"axis_label":"Count","formatter":{"id":"c7199200-e9c6-4c93-8354-5f8b3ac4b36a","type":"BasicTickFormatter"},"plot":{"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0447e53-8518-4727-86ca-8a765294541f","type":"BasicTicker"}},"id":"324a965e-adae-4bce-bbae-a46da03fa6b3","type":"LinearAxis"},{"attributes":{},"id":"c7199200-e9c6-4c93-8354-5f8b3ac4b36a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"}},"id":"d9225ed0-34b5-4599-8020-0bb8599bb7f7","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0447e53-8518-4727-86ca-8a765294541f","type":"BasicTicker"}},"id":"13483068-a52e-4473-9651-1b3bfd384bb2","type":"Grid"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"16pt"},"x":{"value":7.6},"y":{"value":86}},"id":"3255f52c-c5a7-4359-b932-d9b2d8e4aaef","type":"Text"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"7b8d5706-5f8f-486c-bcc3-581abdb888c1","type":"VBar"},{"attributes":{"plot":{"id":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6819cd23-601a-4a54-b6d5-8bdd71c797de","type":"BasicTicker"}},"id":"e5a07f1d-8d00-47ef-a024-d24b1909f310","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"fe91933c-d49e-45cd-9a46-46c0734f49f4","type":"VBar"},{"attributes":{"callback":null},"id":"477ec1a6-86e7-449a-b724-83986232c466","type":"DataRange1d"}],"root_ids":["493dfaf9-3950-44a9-ad60-ce87bbfc1e7b"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"592929a6-2a9e-4b17-83a6-256a64e27f49","elementid":"3e77bc2b-091a-4cca-ae99-10c6cb062487","modelid":"493dfaf9-3950-44a9-ad60-ce87bbfc1e7b"}];
                  
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