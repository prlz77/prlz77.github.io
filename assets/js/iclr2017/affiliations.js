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
      };var element = document.getElementById("37a06965-2990-48bc-9289-2fb389a26062");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '37a06965-2990-48bc-9289-2fb389a26062' but no matching script tag was found. ")
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
                  var docs_json = {"db79ba1e-0426-494e-b708-45603caee357":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"},"ticker":{"id":"5188f9d1-3f66-4baf-8e49-02a30dbcbc29","type":"BasicTicker"}},"id":"b431f0c3-1e1b-4e56-9f10-8a94fefdc4f8","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","y_text","x_text","text"],"data":{"text":["cs.stanford.edu","us.ibm.com","cs.ucla.edu","skoltech.ru","nec-labs.com","cvc.uab.cat","uci.edu","purdue.edu","cs.ucl.ac.uk","inria.fr","washington.edu","samsung.com","mcgill.ca","gatech.edu","nvidia.com","salesforce.com","baidu.com","polymtl.ca","tsinghua.edu.cn","technion.ac.il","cornell.edu","adobe.com","usc.edu","ox.ac.uk","cam.ac.uk","intel.com","uchicago.edu","harvard.edu","cs.umass.edu","uva.nl","twitter.com","cs.washington.edu","ucl.ac.uk","illinois.edu","ttic.edu","columbia.edu","ed.ac.uk","umich.edu","mit.edu","ibm.com","toronto.edu","nyu.edu","openai.com","stanford.edu","cmu.edu","microsoft.com","facebook.com","umontreal.ca","berkeley.edu","google.com"],"x":[3,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,12,13,13,20,21,21,29,34,37,38,40,97],"x_text":[5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,14,15,15,22,23,23,31,36,39,40,42,99],"y":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"y_text":[-0.8,0.19999999999999996,1.2,2.2,3.2,4.2,5.2,6.2,7.2,8.2,9.2,10.2,11.2,12.2,13.2,14.2,15.2,16.2,17.2,18.2,19.2,20.2,21.2,22.2,23.2,24.2,25.2,26.2,27.2,28.2,29.2,30.2,31.2,32.2,33.2,34.2,35.2,36.2,37.2,38.2,39.2,40.2,41.2,42.2,43.2,44.2,45.2,46.2,47.2,48.2]}},"id":"327d792a-56cf-4561-a095-c014672fb8ec","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"fcbe1ac7-4de2-42e5-99d5-cf3dc457b0c0","type":"HBar"},{"attributes":{"plot":{"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"}},"id":"4a9b1f3a-47a0-418d-aef9-6207188e8480","type":"PanTool"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"ca564a6f-d162-4e7b-a54b-a6d9840acbb2","type":"Text"},{"attributes":{},"id":"09c3fd89-d875-4535-9b23-fbd891b85375","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Submissions by affiliation","text_font_size":{"value":"24pt"}},"id":"0fce9519-9765-4970-8ff9-b76ed0014118","type":"Title"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"65c286dd-aa2d-4564-b7d9-ac3314c31e1e","type":"Text"},{"attributes":{"callback":null,"plot":{"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"},"tooltips":[["affiliations","@text"],["submissions","@x"]]},"id":"c224d88c-8c7c-4a8f-8758-22c5dc1ae87e","type":"HoverTool"},{"attributes":{"callback":null},"id":"38e8a398-70e1-49eb-945e-6d01c6395f70","type":"DataRange1d"},{"attributes":{"axis_label":"Submissions","formatter":{"id":"09c3fd89-d875-4535-9b23-fbd891b85375","type":"BasicTickFormatter"},"plot":{"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"},"ticker":{"id":"86ea95e9-31f9-43ed-a314-d92e76879d72","type":"BasicTicker"}},"id":"4075c459-f67f-4b8b-8e57-c9cae452a2b2","type":"LinearAxis"},{"attributes":{},"id":"86ea95e9-31f9-43ed-a314-d92e76879d72","type":"BasicTicker"},{"attributes":{"data_source":{"id":"327d792a-56cf-4561-a095-c014672fb8ec","type":"ColumnDataSource"},"glyph":{"id":"65c286dd-aa2d-4564-b7d9-ac3314c31e1e","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"ca564a6f-d162-4e7b-a54b-a6d9840acbb2","type":"Text"},"selection_glyph":null},"id":"270dc486-8bf0-47c5-bea7-fcdf229e10de","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"552ec9c8-dfe2-480a-b09f-6b795e23b392","type":"HBar"},{"attributes":{"below":[{"id":"4075c459-f67f-4b8b-8e57-c9cae452a2b2","type":"LinearAxis"}],"left":[{"id":"9e759997-7445-43f2-9a5e-a6f7c33baf30","type":"LinearAxis"}],"renderers":[{"id":"4075c459-f67f-4b8b-8e57-c9cae452a2b2","type":"LinearAxis"},{"id":"4a8ffdd6-5c3f-4694-a6c2-3b2411ac5174","type":"Grid"},{"id":"9e759997-7445-43f2-9a5e-a6f7c33baf30","type":"LinearAxis"},{"id":"b431f0c3-1e1b-4e56-9f10-8a94fefdc4f8","type":"Grid"},{"id":"9fdd6aba-50d6-4ab4-80a9-9648491315e3","type":"GlyphRenderer"},{"id":"270dc486-8bf0-47c5-bea7-fcdf229e10de","type":"GlyphRenderer"}],"title":{"id":"0fce9519-9765-4970-8ff9-b76ed0014118","type":"Title"},"tool_events":{"id":"741fd078-1d17-4b35-a69c-cebbe6cac064","type":"ToolEvents"},"toolbar":{"id":"89872b96-38a7-4883-a07f-b7a842014158","type":"Toolbar"},"x_range":{"id":"3850d82f-86d2-49d4-886d-b3bbf4daa297","type":"Range1d"},"y_range":{"id":"38e8a398-70e1-49eb-945e-6d01c6395f70","type":"DataRange1d"}},"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"a047eca8-1f0a-4e4c-aa8d-ca0c90ae4751","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"c224d88c-8c7c-4a8f-8758-22c5dc1ae87e","type":"HoverTool"},{"id":"7a98d89e-5e65-4636-9d80-e9a84ecf3421","type":"ResetTool"},{"id":"4a9b1f3a-47a0-418d-aef9-6207188e8480","type":"PanTool"},{"id":"a047eca8-1f0a-4e4c-aa8d-ca0c90ae4751","type":"WheelZoomTool"}]},"id":"89872b96-38a7-4883-a07f-b7a842014158","type":"Toolbar"},{"attributes":{},"id":"741fd078-1d17-4b35-a69c-cebbe6cac064","type":"ToolEvents"},{"attributes":{"callback":null,"end":120},"id":"3850d82f-86d2-49d4-886d-b3bbf4daa297","type":"Range1d"},{"attributes":{"data_source":{"id":"327d792a-56cf-4561-a095-c014672fb8ec","type":"ColumnDataSource"},"glyph":{"id":"88f50133-0684-4335-91dc-2e4afdaf3dd7","type":"HBar"},"hover_glyph":{"id":"552ec9c8-dfe2-480a-b09f-6b795e23b392","type":"HBar"},"nonselection_glyph":{"id":"fcbe1ac7-4de2-42e5-99d5-cf3dc457b0c0","type":"HBar"},"selection_glyph":null},"id":"9fdd6aba-50d6-4ab4-80a9-9648491315e3","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"}},"id":"7a98d89e-5e65-4636-9d80-e9a84ecf3421","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"88f50133-0684-4335-91dc-2e4afdaf3dd7","type":"HBar"},{"attributes":{"plot":{"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"}},"id":"a047eca8-1f0a-4e4c-aa8d-ca0c90ae4751","type":"WheelZoomTool"},{"attributes":{},"id":"0acc3d9a-c858-4b6a-9cbb-64ae8891fea6","type":"BasicTickFormatter"},{"attributes":{},"id":"5188f9d1-3f66-4baf-8e49-02a30dbcbc29","type":"BasicTicker"},{"attributes":{"plot":{"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"},"ticker":{"id":"86ea95e9-31f9-43ed-a314-d92e76879d72","type":"BasicTicker"}},"id":"4a8ffdd6-5c3f-4694-a6c2-3b2411ac5174","type":"Grid"},{"attributes":{"axis_label":"Affiliation","formatter":{"id":"0acc3d9a-c858-4b6a-9cbb-64ae8891fea6","type":"BasicTickFormatter"},"plot":{"id":"e4834350-58c6-4756-95cc-8de669463e69","subtype":"Figure","type":"Plot"},"ticker":{"id":"5188f9d1-3f66-4baf-8e49-02a30dbcbc29","type":"BasicTicker"}},"id":"9e759997-7445-43f2-9a5e-a6f7c33baf30","type":"LinearAxis"}],"root_ids":["e4834350-58c6-4756-95cc-8de669463e69"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"db79ba1e-0426-494e-b708-45603caee357","elementid":"37a06965-2990-48bc-9289-2fb389a26062","modelid":"e4834350-58c6-4756-95cc-8de669463e69"}];
                  
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