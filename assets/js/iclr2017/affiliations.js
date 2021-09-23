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
      };var element = document.getElementById("236fe6b3-c772-4c81-9f82-62d2cbd009dc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '236fe6b3-c772-4c81-9f82-62d2cbd009dc' but no matching script tag was found. ")
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
                  var docs_json = {"581c954c-3d2b-4163-95a8-a782fd19b0d3":{"roots":{"references":[{"attributes":{"callback":null,"plot":{"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"},"tooltips":[["affiliations","@text"],["submissions","@x"]]},"id":"b3674de4-ac2e-414e-8018-5b9ac55be07f","type":"HoverTool"},{"attributes":{"plot":{"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"}},"id":"989ece9b-e39c-458c-b811-1deeb87c8a38","type":"ResetTool"},{"attributes":{"plot":null,"text":"Submissions by affiliation","text_font_size":{"value":"24pt"}},"id":"eecea3cb-a2bf-42f1-b1c2-92426bc04f13","type":"Title"},{"attributes":{"axis_label":"Submissions","formatter":{"id":"284962ab-6aa7-42bf-9c7a-a14048aa942b","type":"BasicTickFormatter"},"plot":{"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad3a580d-ddf1-48df-8496-8adab9dd478b","type":"BasicTicker"}},"id":"8fc97a2f-c4a1-4738-ac0d-d6320e752c75","type":"LinearAxis"},{"attributes":{},"id":"14c76536-0ca5-499f-a56e-c4c395e24bf0","type":"ToolEvents"},{"attributes":{"below":[{"id":"8fc97a2f-c4a1-4738-ac0d-d6320e752c75","type":"LinearAxis"}],"left":[{"id":"e17a35a6-af88-473c-9fbe-98e463bef87c","type":"LinearAxis"}],"renderers":[{"id":"8fc97a2f-c4a1-4738-ac0d-d6320e752c75","type":"LinearAxis"},{"id":"0f0eeade-5609-4897-aacc-29a129a3b913","type":"Grid"},{"id":"e17a35a6-af88-473c-9fbe-98e463bef87c","type":"LinearAxis"},{"id":"0b3efcd3-c6bf-4d8a-8a23-7f19e48ab62c","type":"Grid"},{"id":"97b505c0-1c1b-4f67-aeb3-75ac43970f11","type":"GlyphRenderer"},{"id":"82d708b1-303a-43ff-80bd-5fb3231d51b9","type":"GlyphRenderer"}],"title":{"id":"eecea3cb-a2bf-42f1-b1c2-92426bc04f13","type":"Title"},"tool_events":{"id":"14c76536-0ca5-499f-a56e-c4c395e24bf0","type":"ToolEvents"},"toolbar":{"id":"7952a7cb-f02e-483b-a698-c333c56fab9b","type":"Toolbar"},"x_range":{"id":"95b4c3dd-9a53-463b-8022-aa89058a640a","type":"Range1d"},"y_range":{"id":"29ebc8a3-e7f4-4f41-9b82-bb264d4f2497","type":"DataRange1d"}},"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"29ebc8a3-e7f4-4f41-9b82-bb264d4f2497","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"ab5a51cc-8f0f-4746-a1ed-aaacae4a3831","type":"HBar"},{"attributes":{},"id":"cf7e1f75-66a4-49ad-8844-a93aa7c94633","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2d4ba6a7-4435-4ed4-b66f-984b0c53da03","type":"ColumnDataSource"},"glyph":{"id":"e8de6d26-1941-4f79-9eff-235fbdd6926a","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"626f3dbe-324d-4c88-87a8-11999a98015f","type":"Text"},"selection_glyph":null},"id":"82d708b1-303a-43ff-80bd-5fb3231d51b9","type":"GlyphRenderer"},{"attributes":{},"id":"c8140ccd-4ba7-4163-b8e2-6a33b5cac4f5","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"26061a6d-2ce4-4b2e-9fac-b3071c9aaacb","type":"HBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"69781b7b-6446-4836-997c-3b30436e9843","type":"HBar"},{"attributes":{"data_source":{"id":"2d4ba6a7-4435-4ed4-b66f-984b0c53da03","type":"ColumnDataSource"},"glyph":{"id":"ab5a51cc-8f0f-4746-a1ed-aaacae4a3831","type":"HBar"},"hover_glyph":{"id":"69781b7b-6446-4836-997c-3b30436e9843","type":"HBar"},"nonselection_glyph":{"id":"26061a6d-2ce4-4b2e-9fac-b3071c9aaacb","type":"HBar"},"selection_glyph":null},"id":"97b505c0-1c1b-4f67-aeb3-75ac43970f11","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","y_text","x_text","text"],"data":{"text":["lip6.fr","robots.ox.ac.uk","tuebingen.mpg.de","nec-labs.com","uci.edu","iitm.ac.in","skoltech.ru","purdue.edu","inria.fr","cvc.uab.cat","ucla.edu","gatech.edu","samsung.com","mcgill.ca","polymtl.ca","usc.edu","adobe.com","baidu.com","technion.ac.il","tsinghua.edu.cn","nvidia.com","cornell.edu","salesforce.com","ox.ac.uk","cam.ac.uk","intel.com","uchicago.edu","twitter.com","uva.nl","harvard.edu","ed.ac.uk","columbia.edu","illinois.edu","ttic.edu","ucl.ac.uk","umich.edu","umass.edu","washington.edu","mit.edu","toronto.edu","ibm.com","nyu.edu","openai.com","stanford.edu","cmu.edu","microsoft.com","facebook.com","umontreal.ca","berkeley.edu","google.com"],"x":[3,3,3,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,9,9,9,9,10,10,11,11,12,13,17,20,21,22,29,34,37,38,41,97],"x_text":[5,5,5,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,11,11,11,11,12,12,13,13,14,15,19,22,23,24,31,36,39,40,43,99],"y":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"y_text":[-0.8,0.19999999999999996,1.2,2.2,3.2,4.2,5.2,6.2,7.2,8.2,9.2,10.2,11.2,12.2,13.2,14.2,15.2,16.2,17.2,18.2,19.2,20.2,21.2,22.2,23.2,24.2,25.2,26.2,27.2,28.2,29.2,30.2,31.2,32.2,33.2,34.2,35.2,36.2,37.2,38.2,39.2,40.2,41.2,42.2,43.2,44.2,45.2,46.2,47.2,48.2]}},"id":"2d4ba6a7-4435-4ed4-b66f-984b0c53da03","type":"ColumnDataSource"},{"attributes":{"axis_label":"Affiliation","formatter":{"id":"c8140ccd-4ba7-4163-b8e2-6a33b5cac4f5","type":"BasicTickFormatter"},"plot":{"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf7e1f75-66a4-49ad-8844-a93aa7c94633","type":"BasicTicker"}},"id":"e17a35a6-af88-473c-9fbe-98e463bef87c","type":"LinearAxis"},{"attributes":{"callback":null,"end":120},"id":"95b4c3dd-9a53-463b-8022-aa89058a640a","type":"Range1d"},{"attributes":{"plot":{"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"}},"id":"bace40d0-a550-4e37-a0dd-4510c912600f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad3a580d-ddf1-48df-8496-8adab9dd478b","type":"BasicTicker"}},"id":"0f0eeade-5609-4897-aacc-29a129a3b913","type":"Grid"},{"attributes":{},"id":"284962ab-6aa7-42bf-9c7a-a14048aa942b","type":"BasicTickFormatter"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"626f3dbe-324d-4c88-87a8-11999a98015f","type":"Text"},{"attributes":{"plot":{"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"}},"id":"48e76821-9677-4c88-9390-f6ba1abf20e6","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"bace40d0-a550-4e37-a0dd-4510c912600f","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"b3674de4-ac2e-414e-8018-5b9ac55be07f","type":"HoverTool"},{"id":"989ece9b-e39c-458c-b811-1deeb87c8a38","type":"ResetTool"},{"id":"48e76821-9677-4c88-9390-f6ba1abf20e6","type":"PanTool"},{"id":"bace40d0-a550-4e37-a0dd-4510c912600f","type":"WheelZoomTool"}]},"id":"7952a7cb-f02e-483b-a698-c333c56fab9b","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf7e1f75-66a4-49ad-8844-a93aa7c94633","type":"BasicTicker"}},"id":"0b3efcd3-c6bf-4d8a-8a23-7f19e48ab62c","type":"Grid"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"e8de6d26-1941-4f79-9eff-235fbdd6926a","type":"Text"},{"attributes":{},"id":"ad3a580d-ddf1-48df-8496-8adab9dd478b","type":"BasicTicker"}],"root_ids":["d8317ed2-2510-47f3-a2ec-59c0b2b101b1"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"581c954c-3d2b-4163-95a8-a782fd19b0d3","elementid":"236fe6b3-c772-4c81-9f82-62d2cbd009dc","modelid":"d8317ed2-2510-47f3-a2ec-59c0b2b101b1"}];
                  
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