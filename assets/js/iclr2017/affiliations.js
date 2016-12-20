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
      };var element = document.getElementById("35fc0ea4-b891-407e-a4d6-dccffe6ce88a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35fc0ea4-b891-407e-a4d6-dccffe6ce88a' but no matching script tag was found. ")
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
                  var docs_json = {"09a173e6-9244-4219-8283-5d320396fcbe":{"roots":{"references":[{"attributes":{},"id":"2a7dbf3f-0e7e-4fdd-ab71-debc52ec0051","type":"ToolEvents"},{"attributes":{"axis_label":"Affiliation","formatter":{"id":"4ba68714-8b19-4aaa-89b5-a295cbe6341d","type":"BasicTickFormatter"},"plot":{"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"},"ticker":{"id":"13137c30-331d-415e-ac3c-84a494f91080","type":"BasicTicker"}},"id":"c4c2240d-05d1-49bc-aa8d-44bc27efe3a0","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"d9aea7a8-a61f-49de-a764-8fb37765db11","type":"HBar"},{"attributes":{"callback":null,"end":120},"id":"a145f1be-9b0f-4589-a11e-e717ac3c40b9","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"},"ticker":{"id":"13137c30-331d-415e-ac3c-84a494f91080","type":"BasicTicker"}},"id":"02a33cfd-6d0d-434e-bece-84610702585f","type":"Grid"},{"attributes":{},"id":"8d557fc6-9bd1-4d5b-a204-62023b7e25da","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"43bfd31f-3f04-4b63-aefa-bc07c95159f5","type":"DataRange1d"},{"attributes":{"plot":{"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"}},"id":"55fd677a-a37c-4f1c-bd2d-8f961a6cfa78","type":"WheelZoomTool"},{"attributes":{"axis_label":"Submissions","formatter":{"id":"8d557fc6-9bd1-4d5b-a204-62023b7e25da","type":"BasicTickFormatter"},"plot":{"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"},"ticker":{"id":"08c09fb5-0464-4f1a-ada9-230b7b30eecc","type":"BasicTicker"}},"id":"e76a92e9-00e1-46b5-9547-1aad7e5f9379","type":"LinearAxis"},{"attributes":{"below":[{"id":"e76a92e9-00e1-46b5-9547-1aad7e5f9379","type":"LinearAxis"}],"left":[{"id":"c4c2240d-05d1-49bc-aa8d-44bc27efe3a0","type":"LinearAxis"}],"renderers":[{"id":"e76a92e9-00e1-46b5-9547-1aad7e5f9379","type":"LinearAxis"},{"id":"b0202e5f-d3b8-4f80-b918-54c5f4c6e505","type":"Grid"},{"id":"c4c2240d-05d1-49bc-aa8d-44bc27efe3a0","type":"LinearAxis"},{"id":"02a33cfd-6d0d-434e-bece-84610702585f","type":"Grid"},{"id":"1174ac3b-d9d2-4f6b-88ce-88b63cd3075e","type":"GlyphRenderer"},{"id":"41e609cc-e8b1-4b6e-b0f0-9216fa22d795","type":"LabelSet"}],"title":{"id":"31d6f36b-10bd-4210-86d2-8c2c8c68606d","type":"Title"},"tool_events":{"id":"2a7dbf3f-0e7e-4fdd-ab71-debc52ec0051","type":"ToolEvents"},"toolbar":{"id":"d231caab-6432-48cb-b9bb-1fe8cbb4b147","type":"Toolbar"},"x_range":{"id":"a145f1be-9b0f-4589-a11e-e717ac3c40b9","type":"Range1d"},"y_range":{"id":"43bfd31f-3f04-4b63-aefa-bc07c95159f5","type":"DataRange1d"}},"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","text"],"data":{"text":["cs.ucl.ac.uk","nec-labs.com","uci.edu","cvc.uab.cat","purdue.edu","cs.ucla.edu","cs.nyu.edu","skoltech.ru","inria.fr","mcgill.ca","washington.edu","samsung.com","gatech.edu","polymtl.ca","nvidia.com","salesforce.com","baidu.com","usc.edu","technion.ac.il","cornell.edu","adobe.com","tsinghua.edu.cn","uchicago.edu","cam.ac.uk","ox.ac.uk","intel.com","eecs.berkeley.edu","harvard.edu","cs.washington.edu","uva.nl","cs.umass.edu","twitter.com","columbia.edu","ed.ac.uk","ucl.ac.uk","illinois.edu","ttic.edu","umich.edu","mit.edu","ibm.com","toronto.edu","nyu.edu","openai.com","stanford.edu","cmu.edu","microsoft.com","berkeley.edu","facebook.com","umontreal.ca","google.com"],"x":[4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,10,12,13,13,17,21,21,29,34,35,37,38,97],"y":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}},"id":"7fe5f15a-1e16-4ed3-b7ca-36e71d36afb4","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Submissions by affiliation","text_font_size":{"value":"24pt"}},"id":"31d6f36b-10bd-4210-86d2-8c2c8c68606d","type":"Title"},{"attributes":{},"id":"08c09fb5-0464-4f1a-ada9-230b7b30eecc","type":"BasicTicker"},{"attributes":{"level":"glyph","plot":{"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"},"source":{"id":"7fe5f15a-1e16-4ed3-b7ca-36e71d36afb4","type":"ColumnDataSource"},"x":{"field":"x"},"x_offset":{"value":5},"y":{"field":"y"},"y_offset":{"value":-7}},"id":"41e609cc-e8b1-4b6e-b0f0-9216fa22d795","type":"LabelSet"},{"attributes":{"plot":{"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"},"ticker":{"id":"08c09fb5-0464-4f1a-ada9-230b7b30eecc","type":"BasicTicker"}},"id":"b0202e5f-d3b8-4f80-b918-54c5f4c6e505","type":"Grid"},{"attributes":{},"id":"13137c30-331d-415e-ac3c-84a494f91080","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"06f1a3e6-0ea9-4dd2-891d-67f4e98947a0","type":"HBar"},{"attributes":{"data_source":{"id":"7fe5f15a-1e16-4ed3-b7ca-36e71d36afb4","type":"ColumnDataSource"},"glyph":{"id":"06f1a3e6-0ea9-4dd2-891d-67f4e98947a0","type":"HBar"},"hover_glyph":null,"nonselection_glyph":{"id":"d9aea7a8-a61f-49de-a764-8fb37765db11","type":"HBar"},"selection_glyph":null},"id":"1174ac3b-d9d2-4f6b-88ce-88b63cd3075e","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"55fd677a-a37c-4f1c-bd2d-8f961a6cfa78","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"0a71ea1f-dcbd-4190-b508-1379cf30ae20","type":"HoverTool"},{"id":"e92f4761-be30-47fb-be67-04f77b12900f","type":"PanTool"},{"id":"55fd677a-a37c-4f1c-bd2d-8f961a6cfa78","type":"WheelZoomTool"}]},"id":"d231caab-6432-48cb-b9bb-1fe8cbb4b147","type":"Toolbar"},{"attributes":{"callback":null,"plot":{"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"},"tooltips":[["affiliations","@text"],["submissions","@x"]]},"id":"0a71ea1f-dcbd-4190-b508-1379cf30ae20","type":"HoverTool"},{"attributes":{},"id":"4ba68714-8b19-4aaa-89b5-a295cbe6341d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b5010e94-9cc4-4445-948a-2883ed0e89be","subtype":"Figure","type":"Plot"}},"id":"e92f4761-be30-47fb-be67-04f77b12900f","type":"PanTool"}],"root_ids":["b5010e94-9cc4-4445-948a-2883ed0e89be"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"09a173e6-9244-4219-8283-5d320396fcbe","elementid":"35fc0ea4-b891-407e-a4d6-dccffe6ce88a","modelid":"b5010e94-9cc4-4445-948a-2883ed0e89be"}];
                  
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