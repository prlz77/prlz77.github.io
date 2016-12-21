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
      };var element = document.getElementById("47b49601-25a7-4dbd-aee1-c1d5a8250e6a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47b49601-25a7-4dbd-aee1-c1d5a8250e6a' but no matching script tag was found. ")
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
                  var docs_json = {"1b68b09a-b658-46fd-92b5-6f36e9335a5a":{"roots":{"references":[{"attributes":{"callback":null,"plot":{"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"},"tooltips":[["affiliations","@text"],["submissions","@x"]]},"id":"e1588c9d-443a-4ccb-8385-28de61b94a5b","type":"HoverTool"},{"attributes":{"callback":null},"id":"c7e0c130-75b5-42e4-8309-353765053a5c","type":"DataRange1d"},{"attributes":{"axis_label":"Submissions","formatter":{"id":"c4cf8778-96c1-4b3a-8f11-b053a90b7837","type":"BasicTickFormatter"},"plot":{"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d5ab74e-3940-4360-9411-92a4f1e16b02","type":"BasicTicker"}},"id":"afdd8aaa-614b-4aac-8a43-d338dd920118","type":"LinearAxis"},{"attributes":{"plot":{"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"}},"id":"8add046a-a188-4ad2-b8bd-38e7ebe64855","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d5ab74e-3940-4360-9411-92a4f1e16b02","type":"BasicTicker"}},"id":"b51e7689-f68c-4fd1-86fe-33d4b0409f76","type":"Grid"},{"attributes":{"below":[{"id":"afdd8aaa-614b-4aac-8a43-d338dd920118","type":"LinearAxis"}],"left":[{"id":"cf1c8be2-527f-4dbb-bf79-5afc74f4489b","type":"LinearAxis"}],"renderers":[{"id":"afdd8aaa-614b-4aac-8a43-d338dd920118","type":"LinearAxis"},{"id":"b51e7689-f68c-4fd1-86fe-33d4b0409f76","type":"Grid"},{"id":"cf1c8be2-527f-4dbb-bf79-5afc74f4489b","type":"LinearAxis"},{"id":"fa4df924-e2ee-4e85-9ba1-d61fa2e01a85","type":"Grid"},{"id":"65cc83cf-4f5e-4ff7-8270-3dae92a792e4","type":"GlyphRenderer"},{"id":"81c956d9-e533-4b00-aed9-f4ce3a18b7f2","type":"LabelSet"}],"title":{"id":"004d1513-4647-4602-96a4-8ad50b3b7667","type":"Title"},"tool_events":{"id":"3ce781db-5601-41f4-ac0f-530a574cba38","type":"ToolEvents"},"toolbar":{"id":"91ad2579-8eac-49c8-93ad-62a5fde54610","type":"Toolbar"},"x_range":{"id":"299d6347-f3a2-4cf1-95fb-0d96bdfbb96b","type":"Range1d"},"y_range":{"id":"c7e0c130-75b5-42e4-8309-353765053a5c","type":"DataRange1d"}},"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4743a95-cdb7-4fa5-b5c0-1d4ff38035da","type":"BasicTicker"}},"id":"fa4df924-e2ee-4e85-9ba1-d61fa2e01a85","type":"Grid"},{"attributes":{},"id":"d4743a95-cdb7-4fa5-b5c0-1d4ff38035da","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"76b0e9bc-aef0-44f6-9b63-522c183534d8","type":"HBar"},{"attributes":{"level":"glyph","plot":{"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"},"source":{"id":"b0ffd902-1807-46be-8904-62ad1ffdf2f1","type":"ColumnDataSource"},"x":{"field":"x"},"x_offset":{"value":5},"y":{"field":"y"},"y_offset":{"value":-7}},"id":"81c956d9-e533-4b00-aed9-f4ce3a18b7f2","type":"LabelSet"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"f8f4ef69-c7da-4020-a15e-6bb1a27f04dc","type":"HBar"},{"attributes":{"data_source":{"id":"b0ffd902-1807-46be-8904-62ad1ffdf2f1","type":"ColumnDataSource"},"glyph":{"id":"dc286861-e3b2-4b6f-bc5e-309ab2c594be","type":"HBar"},"hover_glyph":{"id":"f8f4ef69-c7da-4020-a15e-6bb1a27f04dc","type":"HBar"},"nonselection_glyph":{"id":"76b0e9bc-aef0-44f6-9b63-522c183534d8","type":"HBar"},"selection_glyph":null},"id":"65cc83cf-4f5e-4ff7-8270-3dae92a792e4","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"8add046a-a188-4ad2-b8bd-38e7ebe64855","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"e1588c9d-443a-4ccb-8385-28de61b94a5b","type":"HoverTool"},{"id":"5f302a58-39dc-45b4-9cba-e084fdbeadb4","type":"PanTool"},{"id":"8add046a-a188-4ad2-b8bd-38e7ebe64855","type":"WheelZoomTool"}]},"id":"91ad2579-8eac-49c8-93ad-62a5fde54610","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","text"],"data":{"text":["cs.ucl.ac.uk","nec-labs.com","uci.edu","cvc.uab.cat","purdue.edu","cs.ucla.edu","cs.nyu.edu","skoltech.ru","inria.fr","mcgill.ca","washington.edu","samsung.com","gatech.edu","polymtl.ca","nvidia.com","salesforce.com","baidu.com","usc.edu","technion.ac.il","cornell.edu","adobe.com","tsinghua.edu.cn","uchicago.edu","cam.ac.uk","ox.ac.uk","intel.com","eecs.berkeley.edu","harvard.edu","cs.washington.edu","uva.nl","cs.umass.edu","twitter.com","columbia.edu","ed.ac.uk","ucl.ac.uk","illinois.edu","ttic.edu","umich.edu","mit.edu","ibm.com","toronto.edu","nyu.edu","openai.com","stanford.edu","cmu.edu","microsoft.com","berkeley.edu","facebook.com","umontreal.ca","google.com"],"x":[4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,10,12,13,13,17,21,21,29,34,35,37,38,97],"y":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}},"id":"b0ffd902-1807-46be-8904-62ad1ffdf2f1","type":"ColumnDataSource"},{"attributes":{},"id":"3ce781db-5601-41f4-ac0f-530a574cba38","type":"ToolEvents"},{"attributes":{},"id":"7d5ab74e-3940-4360-9411-92a4f1e16b02","type":"BasicTicker"},{"attributes":{"axis_label":"Affiliation","formatter":{"id":"2af10321-783c-4dfd-85fb-fb1db053f8c8","type":"BasicTickFormatter"},"plot":{"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4743a95-cdb7-4fa5-b5c0-1d4ff38035da","type":"BasicTicker"}},"id":"cf1c8be2-527f-4dbb-bf79-5afc74f4489b","type":"LinearAxis"},{"attributes":{"callback":null,"end":120},"id":"299d6347-f3a2-4cf1-95fb-0d96bdfbb96b","type":"Range1d"},{"attributes":{},"id":"2af10321-783c-4dfd-85fb-fb1db053f8c8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"62239c1b-b931-4576-8305-118f56187417","subtype":"Figure","type":"Plot"}},"id":"5f302a58-39dc-45b4-9cba-e084fdbeadb4","type":"PanTool"},{"attributes":{},"id":"c4cf8778-96c1-4b3a-8f11-b053a90b7837","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Submissions by affiliation","text_font_size":{"value":"24pt"}},"id":"004d1513-4647-4602-96a4-8ad50b3b7667","type":"Title"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"dc286861-e3b2-4b6f-bc5e-309ab2c594be","type":"HBar"}],"root_ids":["62239c1b-b931-4576-8305-118f56187417"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"1b68b09a-b658-46fd-92b5-6f36e9335a5a","elementid":"47b49601-25a7-4dbd-aee1-c1d5a8250e6a","modelid":"62239c1b-b931-4576-8305-118f56187417"}];
                  
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