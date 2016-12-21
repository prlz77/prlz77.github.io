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
      };var element = document.getElementById("d5dc2f03-2726-4578-aa7c-514cc7c37ae8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5dc2f03-2726-4578-aa7c-514cc7c37ae8' but no matching script tag was found. ")
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
                  var docs_json = {"1bcfbc6e-f503-4bbd-8641-6dd23131f663":{"roots":{"references":[{"attributes":{},"id":"3cce2da4-2686-470b-8424-47808b10c716","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"1b006b2d-69d1-48c9-900f-d6bf0ceee33d","type":"HBar"},{"attributes":{},"id":"79fd86a5-db4d-4831-9790-40164f800b20","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a4349700-ba45-4250-849d-0735c7fa6cf6","type":"DataRange1d"},{"attributes":{"plot":{"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"79fd86a5-db4d-4831-9790-40164f800b20","type":"BasicTicker"}},"id":"0654b197-2f96-4891-a914-4ef392e0574f","type":"Grid"},{"attributes":{"callback":null,"plot":{"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"},"tooltips":[["affiliations","@text"],["submissions","@x"]]},"id":"57f5283b-cabc-47a4-8b7f-a03a53445cec","type":"HoverTool"},{"attributes":{"plot":{"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"}},"id":"c5af6553-51fc-4b96-93da-61176ce33204","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"6deb9689-9381-4f51-ade3-079d6238a667","type":"HBar"},{"attributes":{},"id":"b0a15957-1e4d-4d4e-a985-955a64886288","type":"BasicTickFormatter"},{"attributes":{},"id":"72f00adb-def2-4798-999b-0e40576306c0","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cce2da4-2686-470b-8424-47808b10c716","type":"BasicTicker"}},"id":"f8434344-f382-4a49-b0a1-12861ad0cf1f","type":"Grid"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"3865d8e9-33d1-45f3-a2b2-bbbc16430a36","type":"Text"},{"attributes":{"callback":null,"column_names":["y","x","y_text","x_text","text"],"data":{"text":["cs.ucl.ac.uk","cvc.uab.cat","uci.edu","nec-labs.com","purdue.edu","cs.ucla.edu","cs.nyu.edu","skoltech.ru","inria.fr","mcgill.ca","washington.edu","samsung.com","gatech.edu","polymtl.ca","nvidia.com","salesforce.com","baidu.com","usc.edu","technion.ac.il","cornell.edu","adobe.com","tsinghua.edu.cn","uchicago.edu","cam.ac.uk","ox.ac.uk","intel.com","eecs.berkeley.edu","harvard.edu","cs.washington.edu","uva.nl","cs.umass.edu","twitter.com","columbia.edu","ed.ac.uk","ucl.ac.uk","illinois.edu","ttic.edu","umich.edu","mit.edu","ibm.com","toronto.edu","nyu.edu","openai.com","stanford.edu","cmu.edu","microsoft.com","berkeley.edu","facebook.com","umontreal.ca","google.com"],"x":[4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,10,12,13,13,17,21,21,29,34,35,37,38,97],"x_text":[6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,12,14,15,15,19,23,23,31,36,37,39,40,99],"y":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"y_text":[-0.8,0.19999999999999996,1.2,2.2,3.2,4.2,5.2,6.2,7.2,8.2,9.2,10.2,11.2,12.2,13.2,14.2,15.2,16.2,17.2,18.2,19.2,20.2,21.2,22.2,23.2,24.2,25.2,26.2,27.2,28.2,29.2,30.2,31.2,32.2,33.2,34.2,35.2,36.2,37.2,38.2,39.2,40.2,41.2,42.2,43.2,44.2,45.2,46.2,47.2,48.2]}},"id":"5ae0fbf9-a7ca-4ac4-a746-0843865219cc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"}},"id":"898d38dd-b504-462a-b5a1-d35c85e441c9","type":"ResetTool"},{"attributes":{},"id":"6f3a54eb-2ee7-4a9f-85d1-5b484ff43187","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"c5af6553-51fc-4b96-93da-61176ce33204","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"57f5283b-cabc-47a4-8b7f-a03a53445cec","type":"HoverTool"},{"id":"898d38dd-b504-462a-b5a1-d35c85e441c9","type":"ResetTool"},{"id":"28ce141e-532a-4cb8-a23b-b897478e9e02","type":"PanTool"},{"id":"c5af6553-51fc-4b96-93da-61176ce33204","type":"WheelZoomTool"}]},"id":"1c46a93b-cad0-4ea4-b86d-62554ab01b48","type":"Toolbar"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"4d44ee4b-c9b4-4407-929d-59ca073cd809","type":"Text"},{"attributes":{"axis_label":"Affiliation","formatter":{"id":"72f00adb-def2-4798-999b-0e40576306c0","type":"BasicTickFormatter"},"plot":{"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cce2da4-2686-470b-8424-47808b10c716","type":"BasicTicker"}},"id":"3304420c-94ca-400c-b0a5-9b14f16fad4a","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Submissions by affiliation","text_font_size":{"value":"24pt"}},"id":"ef4b35aa-f07c-441a-a23d-8256018cfbaf","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"7e25962b-3229-4159-bcdb-d193c0ab2eb7","type":"HBar"},{"attributes":{"axis_label":"Submissions","formatter":{"id":"b0a15957-1e4d-4d4e-a985-955a64886288","type":"BasicTickFormatter"},"plot":{"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"79fd86a5-db4d-4831-9790-40164f800b20","type":"BasicTicker"}},"id":"3e4f9939-59b8-4b27-8fd2-db33f30f5efb","type":"LinearAxis"},{"attributes":{"plot":{"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"}},"id":"28ce141e-532a-4cb8-a23b-b897478e9e02","type":"PanTool"},{"attributes":{"data_source":{"id":"5ae0fbf9-a7ca-4ac4-a746-0843865219cc","type":"ColumnDataSource"},"glyph":{"id":"3865d8e9-33d1-45f3-a2b2-bbbc16430a36","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"4d44ee4b-c9b4-4407-929d-59ca073cd809","type":"Text"},"selection_glyph":null},"id":"01f1771b-041f-4f86-a430-5483845ab26d","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":120},"id":"f21ba173-c53f-4c14-b71f-26148ae44d53","type":"Range1d"},{"attributes":{"below":[{"id":"3e4f9939-59b8-4b27-8fd2-db33f30f5efb","type":"LinearAxis"}],"left":[{"id":"3304420c-94ca-400c-b0a5-9b14f16fad4a","type":"LinearAxis"}],"renderers":[{"id":"3e4f9939-59b8-4b27-8fd2-db33f30f5efb","type":"LinearAxis"},{"id":"0654b197-2f96-4891-a914-4ef392e0574f","type":"Grid"},{"id":"3304420c-94ca-400c-b0a5-9b14f16fad4a","type":"LinearAxis"},{"id":"f8434344-f382-4a49-b0a1-12861ad0cf1f","type":"Grid"},{"id":"b6119fca-7ef3-48ed-96e4-76f3dce5110e","type":"GlyphRenderer"},{"id":"01f1771b-041f-4f86-a430-5483845ab26d","type":"GlyphRenderer"}],"title":{"id":"ef4b35aa-f07c-441a-a23d-8256018cfbaf","type":"Title"},"tool_events":{"id":"6f3a54eb-2ee7-4a9f-85d1-5b484ff43187","type":"ToolEvents"},"toolbar":{"id":"1c46a93b-cad0-4ea4-b86d-62554ab01b48","type":"Toolbar"},"x_range":{"id":"f21ba173-c53f-4c14-b71f-26148ae44d53","type":"Range1d"},"y_range":{"id":"a4349700-ba45-4250-849d-0735c7fa6cf6","type":"DataRange1d"}},"id":"6f68243a-b908-42bf-8854-fdfe6f2a96f5","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"5ae0fbf9-a7ca-4ac4-a746-0843865219cc","type":"ColumnDataSource"},"glyph":{"id":"1b006b2d-69d1-48c9-900f-d6bf0ceee33d","type":"HBar"},"hover_glyph":{"id":"6deb9689-9381-4f51-ade3-079d6238a667","type":"HBar"},"nonselection_glyph":{"id":"7e25962b-3229-4159-bcdb-d193c0ab2eb7","type":"HBar"},"selection_glyph":null},"id":"b6119fca-7ef3-48ed-96e4-76f3dce5110e","type":"GlyphRenderer"}],"root_ids":["6f68243a-b908-42bf-8854-fdfe6f2a96f5"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"1bcfbc6e-f503-4bbd-8641-6dd23131f663","elementid":"d5dc2f03-2726-4578-aa7c-514cc7c37ae8","modelid":"6f68243a-b908-42bf-8854-fdfe6f2a96f5"}];
                  
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