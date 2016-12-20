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
      };var element = document.getElementById("ca5311f6-c75c-426a-9e86-e5ff33a12af3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca5311f6-c75c-426a-9e86-e5ff33a12af3' but no matching script tag was found. ")
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
                  var docs_json = {"d8332e3b-dc1e-4b53-b292-6be8d04e62a6":{"roots":{"references":[{"attributes":{"plot":{"id":"77db0a71-7364-4096-8209-c64a59b627e1","subtype":"Figure","type":"Plot"}},"id":"e88ad123-9d61-43ce-bab3-f5f59c7a18ce","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4018a90f-9568-4456-9ae8-191209436a3b","type":"ColumnDataSource"},"glyph":{"id":"2daa34e0-04a4-4cf8-b613-998eeb0c68e2","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"d56d2bdc-5601-475e-9cf9-76ad1080e6c7","type":"VBar"},"selection_glyph":null},"id":"af5db558-b1a2-493d-ad51-32cec50bc694","type":"GlyphRenderer"},{"attributes":{},"id":"31c81b01-6278-4304-b21e-bae23cfb647d","type":"ToolEvents"},{"attributes":{},"id":"7bd7bdce-a103-4516-a5f3-15c8c9a51d50","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.5,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5],"y":[0,0,5,46,97,112,115,85,22,3]}},"id":"4018a90f-9568-4456-9ae8-191209436a3b","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"0c6d8f1e-4559-4db5-88cd-7e055b785dc2","type":"DataRange1d"},{"attributes":{},"id":"ac6ca332-2c4f-4933-b9cb-28af59f6c907","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"d56d2bdc-5601-475e-9cf9-76ad1080e6c7","type":"VBar"},{"attributes":{},"id":"2a5d3598-c0d8-4da0-bf0f-df6c7ef32b5a","type":"BasicTicker"},{"attributes":{"callback":null,"plot":{"id":"77db0a71-7364-4096-8209-c64a59b627e1","subtype":"Figure","type":"Plot"},"tooltips":[["count","@y"],["score","@x +- 0.5"]]},"id":"62a23bd2-0df6-4b5b-bcb5-4b46bceb63c7","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"y"},"width":{"value":0.9},"x":{"field":"x"}},"id":"2daa34e0-04a4-4cf8-b613-998eeb0c68e2","type":"VBar"},{"attributes":{"plot":null,"text":"Rating histogram","text_font_size":{"value":"24pt"}},"id":"b3929d0b-5584-4e70-8a55-a3baab0b54c4","type":"Title"},{"attributes":{"axis_label":"Score","formatter":{"id":"ac6ca332-2c4f-4933-b9cb-28af59f6c907","type":"BasicTickFormatter"},"plot":{"id":"77db0a71-7364-4096-8209-c64a59b627e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a5d3598-c0d8-4da0-bf0f-df6c7ef32b5a","type":"BasicTicker"}},"id":"b3ec7472-a34a-4b20-bcea-1a8f489096a0","type":"LinearAxis"},{"attributes":{},"id":"3c813fec-c6b7-4c30-9782-2d46baf923f0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"77db0a71-7364-4096-8209-c64a59b627e1","subtype":"Figure","type":"Plot"}},"id":"eeebeb6d-588e-4fcc-ac22-bdfd6e6900a6","type":"PanTool"},{"attributes":{"callback":null},"id":"0bd6c6d2-1979-45a4-bbf2-81e588ba6d10","type":"DataRange1d"},{"attributes":{"below":[{"id":"b3ec7472-a34a-4b20-bcea-1a8f489096a0","type":"LinearAxis"}],"left":[{"id":"067c28b9-5974-48fb-b429-830ea07132d3","type":"LinearAxis"}],"renderers":[{"id":"b3ec7472-a34a-4b20-bcea-1a8f489096a0","type":"LinearAxis"},{"id":"a201a413-e5c4-4ab8-8373-2d815c5d2dce","type":"Grid"},{"id":"067c28b9-5974-48fb-b429-830ea07132d3","type":"LinearAxis"},{"id":"f95f27f0-7034-4f9f-9aeb-0ecacf8076c1","type":"Grid"},{"id":"af5db558-b1a2-493d-ad51-32cec50bc694","type":"GlyphRenderer"}],"title":{"id":"b3929d0b-5584-4e70-8a55-a3baab0b54c4","type":"Title"},"tool_events":{"id":"31c81b01-6278-4304-b21e-bae23cfb647d","type":"ToolEvents"},"toolbar":{"id":"727a68dc-745b-4b63-87a6-9c89749f023b","type":"Toolbar"},"x_range":{"id":"0c6d8f1e-4559-4db5-88cd-7e055b785dc2","type":"DataRange1d"},"y_range":{"id":"0bd6c6d2-1979-45a4-bbf2-81e588ba6d10","type":"DataRange1d"}},"id":"77db0a71-7364-4096-8209-c64a59b627e1","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"62a23bd2-0df6-4b5b-bcb5-4b46bceb63c7","type":"HoverTool"},{"id":"e88ad123-9d61-43ce-bab3-f5f59c7a18ce","type":"WheelZoomTool"},{"id":"eeebeb6d-588e-4fcc-ac22-bdfd6e6900a6","type":"PanTool"}]},"id":"727a68dc-745b-4b63-87a6-9c89749f023b","type":"Toolbar"},{"attributes":{"plot":{"id":"77db0a71-7364-4096-8209-c64a59b627e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a5d3598-c0d8-4da0-bf0f-df6c7ef32b5a","type":"BasicTicker"}},"id":"a201a413-e5c4-4ab8-8373-2d815c5d2dce","type":"Grid"},{"attributes":{"axis_label":"Count","formatter":{"id":"3c813fec-c6b7-4c30-9782-2d46baf923f0","type":"BasicTickFormatter"},"plot":{"id":"77db0a71-7364-4096-8209-c64a59b627e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7bd7bdce-a103-4516-a5f3-15c8c9a51d50","type":"BasicTicker"}},"id":"067c28b9-5974-48fb-b429-830ea07132d3","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"77db0a71-7364-4096-8209-c64a59b627e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"7bd7bdce-a103-4516-a5f3-15c8c9a51d50","type":"BasicTicker"}},"id":"f95f27f0-7034-4f9f-9aeb-0ecacf8076c1","type":"Grid"}],"root_ids":["77db0a71-7364-4096-8209-c64a59b627e1"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"d8332e3b-dc1e-4b53-b292-6be8d04e62a6","elementid":"ca5311f6-c75c-426a-9e86-e5ff33a12af3","modelid":"77db0a71-7364-4096-8209-c64a59b627e1"}];
                  
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