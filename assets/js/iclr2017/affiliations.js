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
      };var element = document.getElementById("77b1e655-eb28-4c49-a00a-241188ec9980");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '77b1e655-eb28-4c49-a00a-241188ec9980' but no matching script tag was found. ")
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
                  var docs_json = {"aeccfd8c-9ed7-4462-9eed-21d9d7555cb3":{"roots":{"references":[{"attributes":{},"id":"6f94864f-157c-4293-94b5-ca3b6d72fe02","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"}},"id":"d893d564-c97c-43bd-8218-4f175354dcef","type":"WheelZoomTool"},{"attributes":{"axis_label":"Affiliation","formatter":{"id":"c5158bbb-9b21-451d-9f15-cf6ebac04f67","type":"BasicTickFormatter"},"plot":{"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f217a3a0-0b28-43c2-beff-b56e13af1a03","type":"BasicTicker"}},"id":"ec191f7e-1df0-4d38-b63c-004aaa4fbee6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7a6e1dae-a1c8-41a3-9e37-f78b59c8e8fa","type":"ColumnDataSource"},"glyph":{"id":"10145c55-e3fd-424a-8091-68fc37bff1b8","type":"HBar"},"hover_glyph":{"id":"f1e6ed48-79ad-47dd-8c4d-1f3203b2f66b","type":"HBar"},"nonselection_glyph":{"id":"2e774eec-ef51-49d3-8f6d-4316be58f000","type":"HBar"},"selection_glyph":null},"id":"f45405c4-0f33-44d0-8cde-6b0a6ad8ae29","type":"GlyphRenderer"},{"attributes":{},"id":"f217a3a0-0b28-43c2-beff-b56e13af1a03","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"2e774eec-ef51-49d3-8f6d-4316be58f000","type":"HBar"},{"attributes":{"axis_label":"Submissions","formatter":{"id":"6f94864f-157c-4293-94b5-ca3b6d72fe02","type":"BasicTickFormatter"},"plot":{"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3fa66571-17ec-46d3-83a8-9c9eae11c047","type":"BasicTicker"}},"id":"6f356c1d-87b0-40bc-bf58-5f92c0ca5f75","type":"LinearAxis"},{"attributes":{"callback":null,"end":120},"id":"7db728fb-db7c-4459-ada7-f5f087b149b8","type":"Range1d"},{"attributes":{"plot":{"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"}},"id":"2f38e565-14e0-4a43-89f1-75c8145abaa5","type":"ResetTool"},{"attributes":{},"id":"3fa66571-17ec-46d3-83a8-9c9eae11c047","type":"BasicTicker"},{"attributes":{"plot":{"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"}},"id":"d6c0aa99-9d6c-4397-990d-592fd69f36b9","type":"PanTool"},{"attributes":{"callback":null},"id":"45ed5c10-7fd2-49ec-8e77-05d40fe4149a","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Submissions by affiliation","text_font_size":{"value":"24pt"}},"id":"e690ec21-3d5c-4a39-a1e1-a5c88617bc49","type":"Title"},{"attributes":{"data_source":{"id":"7a6e1dae-a1c8-41a3-9e37-f78b59c8e8fa","type":"ColumnDataSource"},"glyph":{"id":"f3dea030-ecb3-4c92-9e01-4820ff24a8e9","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"9e70ac98-e732-4224-880e-1341fd548a87","type":"Text"},"selection_glyph":null},"id":"926b958e-15a3-4167-bdd6-34a2a67f3596","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"10145c55-e3fd-424a-8091-68fc37bff1b8","type":"HBar"},{"attributes":{"below":[{"id":"6f356c1d-87b0-40bc-bf58-5f92c0ca5f75","type":"LinearAxis"}],"left":[{"id":"ec191f7e-1df0-4d38-b63c-004aaa4fbee6","type":"LinearAxis"}],"renderers":[{"id":"6f356c1d-87b0-40bc-bf58-5f92c0ca5f75","type":"LinearAxis"},{"id":"b89a79c1-cb40-41cf-8eb8-ed537948c9c0","type":"Grid"},{"id":"ec191f7e-1df0-4d38-b63c-004aaa4fbee6","type":"LinearAxis"},{"id":"05d7215c-58bc-484e-9ebe-d924ffcd996a","type":"Grid"},{"id":"f45405c4-0f33-44d0-8cde-6b0a6ad8ae29","type":"GlyphRenderer"},{"id":"926b958e-15a3-4167-bdd6-34a2a67f3596","type":"GlyphRenderer"}],"title":{"id":"e690ec21-3d5c-4a39-a1e1-a5c88617bc49","type":"Title"},"tool_events":{"id":"8b3148c0-e24a-4b7d-8c96-4942e40184e4","type":"ToolEvents"},"toolbar":{"id":"7a6cb33f-3f29-425a-bbc8-b613ddc6f85f","type":"Toolbar"},"x_range":{"id":"7db728fb-db7c-4459-ada7-f5f087b149b8","type":"Range1d"},"y_range":{"id":"45ed5c10-7fd2-49ec-8e77-05d40fe4149a","type":"DataRange1d"}},"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"f3dea030-ecb3-4c92-9e01-4820ff24a8e9","type":"Text"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"d893d564-c97c-43bd-8218-4f175354dcef","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"2f92de59-90b3-433a-b957-88469b0103d6","type":"HoverTool"},{"id":"2f38e565-14e0-4a43-89f1-75c8145abaa5","type":"ResetTool"},{"id":"d6c0aa99-9d6c-4397-990d-592fd69f36b9","type":"PanTool"},{"id":"d893d564-c97c-43bd-8218-4f175354dcef","type":"WheelZoomTool"}]},"id":"7a6cb33f-3f29-425a-bbc8-b613ddc6f85f","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","y_text","x_text","text"],"data":{"text":["snu.ac.kr","sjtu.edu.cn","tu-berlin.de","lip6.fr","purdue.edu","cvc.uab.cat","skoltech.ru","uci.edu","inria.fr","nec-labs.com","mcgill.ca","samsung.com","ucla.edu","gatech.edu","cornell.edu","tsinghua.edu.cn","adobe.com","nvidia.com","baidu.com","technion.ac.il","salesforce.com","polymtl.ca","usc.edu","ox.ac.uk","cam.ac.uk","intel.com","uchicago.edu","harvard.edu","twitter.com","uva.nl","ttic.edu","illinois.edu","columbia.edu","ed.ac.uk","ucl.ac.uk","umich.edu","washington.edu","umass.edu","mit.edu","toronto.edu","ibm.com","nyu.edu","openai.com","stanford.edu","cmu.edu","microsoft.com","facebook.com","umontreal.ca","berkeley.edu","google.com"],"x":[3,3,3,3,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,9,9,9,9,10,10,11,11,12,13,17,20,21,22,29,34,37,38,41,97],"x_text":[5,5,5,5,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,11,11,11,11,12,12,13,13,14,15,19,22,23,24,31,36,39,40,43,99],"y":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"y_text":[-0.8,0.19999999999999996,1.2,2.2,3.2,4.2,5.2,6.2,7.2,8.2,9.2,10.2,11.2,12.2,13.2,14.2,15.2,16.2,17.2,18.2,19.2,20.2,21.2,22.2,23.2,24.2,25.2,26.2,27.2,28.2,29.2,30.2,31.2,32.2,33.2,34.2,35.2,36.2,37.2,38.2,39.2,40.2,41.2,42.2,43.2,44.2,45.2,46.2,47.2,48.2]}},"id":"7a6e1dae-a1c8-41a3-9e37-f78b59c8e8fa","type":"ColumnDataSource"},{"attributes":{},"id":"c5158bbb-9b21-451d-9f15-cf6ebac04f67","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f217a3a0-0b28-43c2-beff-b56e13af1a03","type":"BasicTicker"}},"id":"05d7215c-58bc-484e-9ebe-d924ffcd996a","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"f1e6ed48-79ad-47dd-8c4d-1f3203b2f66b","type":"HBar"},{"attributes":{"plot":{"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3fa66571-17ec-46d3-83a8-9c9eae11c047","type":"BasicTicker"}},"id":"b89a79c1-cb40-41cf-8eb8-ed537948c9c0","type":"Grid"},{"attributes":{},"id":"8b3148c0-e24a-4b7d-8c96-4942e40184e4","type":"ToolEvents"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"9e70ac98-e732-4224-880e-1341fd548a87","type":"Text"},{"attributes":{"callback":null,"plot":{"id":"01a80f95-058d-431c-973f-e3995bcdbd6e","subtype":"Figure","type":"Plot"},"tooltips":[["affiliations","@text"],["submissions","@x"]]},"id":"2f92de59-90b3-433a-b957-88469b0103d6","type":"HoverTool"}],"root_ids":["01a80f95-058d-431c-973f-e3995bcdbd6e"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"aeccfd8c-9ed7-4462-9eed-21d9d7555cb3","elementid":"77b1e655-eb28-4c49-a00a-241188ec9980","modelid":"01a80f95-058d-431c-973f-e3995bcdbd6e"}];
                  
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