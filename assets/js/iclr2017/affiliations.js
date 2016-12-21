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
      };var element = document.getElementById("7f07cdad-e808-42e6-9250-cdca897bd310");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7f07cdad-e808-42e6-9250-cdca897bd310' but no matching script tag was found. ")
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
                  var docs_json = {"d37fcb8f-b6e8-49ce-b18c-444c28e1a4e8":{"roots":{"references":[{"attributes":{"callback":null,"plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"},"tooltips":[["affiliations","@text"],["submissions","@x"]]},"id":"653f325e-e092-4673-8701-1e8c6c979789","type":"HoverTool"},{"attributes":{"axis_label":"Submissions","formatter":{"id":"1c3d3ef4-9879-4889-ad6a-dd3b1110f666","type":"BasicTickFormatter"},"plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2b63ed8-39df-41ad-8872-af8646454fd2","type":"BasicTicker"}},"id":"892133ee-0dd2-4916-b230-98ec549e6f9c","type":"LinearAxis"},{"attributes":{"level":"glyph","plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"},"source":{"id":"d9fc1084-70f5-4be0-917c-873ac9780cdd","type":"ColumnDataSource"},"x":{"field":"x"},"x_offset":{"value":5},"y":{"field":"y"},"y_offset":{"value":-7}},"id":"5928ac5b-e4fa-4816-a209-8e2d2685d8e3","type":"LabelSet"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"269fb4f0-6665-4719-80e6-4abb4131a87a","type":"HBar"},{"attributes":{},"id":"17b277ed-5bf4-4158-b411-3c9ecb742400","type":"BasicTicker"},{"attributes":{"plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2b63ed8-39df-41ad-8872-af8646454fd2","type":"BasicTicker"}},"id":"5e4400e8-e116-43ab-a5f7-994e41fe1db6","type":"Grid"},{"attributes":{},"id":"1c3d3ef4-9879-4889-ad6a-dd3b1110f666","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"}},"id":"e4947088-2e5c-42b1-8378-14a70c12ee79","type":"ResetTool"},{"attributes":{"axis_label":"Affiliation","formatter":{"id":"75a887b2-9e21-4e06-ac1c-058d155f4483","type":"BasicTickFormatter"},"plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"},"ticker":{"id":"17b277ed-5bf4-4158-b411-3c9ecb742400","type":"BasicTicker"}},"id":"db4741cc-c72e-438f-8ae0-995ab32b0543","type":"LinearAxis"},{"attributes":{"plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"}},"id":"360dce81-0b40-4d86-a38d-0da2dd291caa","type":"PanTool"},{"attributes":{},"id":"75a887b2-9e21-4e06-ac1c-058d155f4483","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"ebf50194-1224-4e09-a945-7166b728ca98","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"653f325e-e092-4673-8701-1e8c6c979789","type":"HoverTool"},{"id":"e4947088-2e5c-42b1-8378-14a70c12ee79","type":"ResetTool"},{"id":"360dce81-0b40-4d86-a38d-0da2dd291caa","type":"PanTool"},{"id":"ebf50194-1224-4e09-a945-7166b728ca98","type":"WheelZoomTool"}]},"id":"21c26a58-ef5c-4362-ac83-68c8255140ac","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","text"],"data":{"text":["cs.ucl.ac.uk","nec-labs.com","uci.edu","cvc.uab.cat","purdue.edu","cs.ucla.edu","cs.nyu.edu","skoltech.ru","inria.fr","mcgill.ca","washington.edu","samsung.com","gatech.edu","polymtl.ca","nvidia.com","salesforce.com","baidu.com","usc.edu","technion.ac.il","cornell.edu","adobe.com","tsinghua.edu.cn","uchicago.edu","cam.ac.uk","ox.ac.uk","intel.com","eecs.berkeley.edu","harvard.edu","cs.washington.edu","uva.nl","cs.umass.edu","twitter.com","columbia.edu","ed.ac.uk","ucl.ac.uk","illinois.edu","ttic.edu","umich.edu","mit.edu","ibm.com","toronto.edu","nyu.edu","openai.com","stanford.edu","cmu.edu","microsoft.com","berkeley.edu","facebook.com","umontreal.ca","google.com"],"x":[4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,10,12,13,13,17,21,21,29,34,35,37,38,97],"y":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}},"id":"d9fc1084-70f5-4be0-917c-873ac9780cdd","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"870a7de7-b577-4526-ae64-f4e1f99a63db","type":"HBar"},{"attributes":{"dimension":1,"plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"},"ticker":{"id":"17b277ed-5bf4-4158-b411-3c9ecb742400","type":"BasicTicker"}},"id":"10f2181d-88fb-40b8-b415-28159fc71ac7","type":"Grid"},{"attributes":{"plot":null,"text":"Submissions by affiliation","text_font_size":{"value":"24pt"}},"id":"5666e1b4-0c0d-4fc8-b039-cb16f5e05668","type":"Title"},{"attributes":{"callback":null},"id":"b2ce225c-b8dc-4c9e-81c7-e3b54541123a","type":"DataRange1d"},{"attributes":{"below":[{"id":"892133ee-0dd2-4916-b230-98ec549e6f9c","type":"LinearAxis"}],"left":[{"id":"db4741cc-c72e-438f-8ae0-995ab32b0543","type":"LinearAxis"}],"renderers":[{"id":"892133ee-0dd2-4916-b230-98ec549e6f9c","type":"LinearAxis"},{"id":"5e4400e8-e116-43ab-a5f7-994e41fe1db6","type":"Grid"},{"id":"db4741cc-c72e-438f-8ae0-995ab32b0543","type":"LinearAxis"},{"id":"10f2181d-88fb-40b8-b415-28159fc71ac7","type":"Grid"},{"id":"b34e2f1b-5d0b-4433-af1c-a206127d34fe","type":"GlyphRenderer"},{"id":"5928ac5b-e4fa-4816-a209-8e2d2685d8e3","type":"LabelSet"}],"title":{"id":"5666e1b4-0c0d-4fc8-b039-cb16f5e05668","type":"Title"},"tool_events":{"id":"d72de427-5f7d-4dc4-9fbf-443c24aa9dc1","type":"ToolEvents"},"toolbar":{"id":"21c26a58-ef5c-4362-ac83-68c8255140ac","type":"Toolbar"},"x_range":{"id":"e5cb1a3d-d70d-4ef6-9ced-9f91dd0c0e0f","type":"Range1d"},"y_range":{"id":"b2ce225c-b8dc-4c9e-81c7-e3b54541123a","type":"DataRange1d"}},"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b2b63ed8-39df-41ad-8872-af8646454fd2","type":"BasicTicker"},{"attributes":{"callback":null,"end":120},"id":"e5cb1a3d-d70d-4ef6-9ced-9f91dd0c0e0f","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"33bfd5f1-fb0f-4c11-b323-2444a4e41a5a","type":"HBar"},{"attributes":{"data_source":{"id":"d9fc1084-70f5-4be0-917c-873ac9780cdd","type":"ColumnDataSource"},"glyph":{"id":"870a7de7-b577-4526-ae64-f4e1f99a63db","type":"HBar"},"hover_glyph":{"id":"269fb4f0-6665-4719-80e6-4abb4131a87a","type":"HBar"},"nonselection_glyph":{"id":"33bfd5f1-fb0f-4c11-b323-2444a4e41a5a","type":"HBar"},"selection_glyph":null},"id":"b34e2f1b-5d0b-4433-af1c-a206127d34fe","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d","subtype":"Figure","type":"Plot"}},"id":"ebf50194-1224-4e09-a945-7166b728ca98","type":"WheelZoomTool"},{"attributes":{},"id":"d72de427-5f7d-4dc4-9fbf-443c24aa9dc1","type":"ToolEvents"}],"root_ids":["83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"d37fcb8f-b6e8-49ce-b18c-444c28e1a4e8","elementid":"7f07cdad-e808-42e6-9250-cdca897bd310","modelid":"83dcc8a4-3fe1-488c-b9c4-9ddc9ff7119d"}];
                  
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