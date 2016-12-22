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
      };var element = document.getElementById("dac7f49e-d471-43a8-a6f4-0124f0267d23");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dac7f49e-d471-43a8-a6f4-0124f0267d23' but no matching script tag was found. ")
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
                  var docs_json = {"b043696b-9f30-4f43-b575-6ad40ac27b40":{"roots":{"references":[{"attributes":{"callback":null,"end":120},"id":"367a7fdb-b7e8-4982-8ec4-77cf28562093","type":"Range1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"e40ff36a-2142-4fae-9411-ea3ed41dc3a6","type":"HBar"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"baa334f5-216e-4ee0-abd9-6b15e38c5918","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"38d8faf3-6ccf-434d-b24b-63f77d2119f3","type":"HoverTool"},{"id":"32244ef8-1651-4fd7-b1e3-501032f10872","type":"ResetTool"},{"id":"5ca9e968-f2ae-433f-9d89-8d2476596cee","type":"PanTool"},{"id":"baa334f5-216e-4ee0-abd9-6b15e38c5918","type":"WheelZoomTool"}]},"id":"4d06804f-adaf-4c24-84b6-6d324f006908","type":"Toolbar"},{"attributes":{"axis_label":"Affiliation","formatter":{"id":"635875c4-47ee-4fa6-a759-be730413bc38","type":"BasicTickFormatter"},"plot":{"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"},"ticker":{"id":"54abf58a-2ee9-48d2-8fb3-02d2f3aac2de","type":"BasicTicker"}},"id":"dca8a698-dfb0-48de-a39c-3d37c57ee73d","type":"LinearAxis"},{"attributes":{"below":[{"id":"ebb838f2-2978-441a-b99d-1644e3760502","type":"LinearAxis"}],"left":[{"id":"dca8a698-dfb0-48de-a39c-3d37c57ee73d","type":"LinearAxis"}],"renderers":[{"id":"ebb838f2-2978-441a-b99d-1644e3760502","type":"LinearAxis"},{"id":"64b3ddce-6466-46ad-8e78-8c33288eebc8","type":"Grid"},{"id":"dca8a698-dfb0-48de-a39c-3d37c57ee73d","type":"LinearAxis"},{"id":"db0fc9d5-0661-4e1b-b9cf-09ae61661d10","type":"Grid"},{"id":"3bcc118c-1979-4af3-a9a3-f47d5c88f26f","type":"GlyphRenderer"},{"id":"60ad1e79-e814-4a4f-bd2c-e84603bfe3ee","type":"GlyphRenderer"}],"title":{"id":"8f786ef3-d16c-4274-8fc4-53468fb07b63","type":"Title"},"tool_events":{"id":"92215767-ab62-422b-8c67-aa10a1dd1e28","type":"ToolEvents"},"toolbar":{"id":"4d06804f-adaf-4c24-84b6-6d324f006908","type":"Toolbar"},"x_range":{"id":"367a7fdb-b7e8-4982-8ec4-77cf28562093","type":"Range1d"},"y_range":{"id":"95a9dc08-2265-42c5-b905-cb439e1478a7","type":"DataRange1d"}},"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"}},"id":"5ca9e968-f2ae-433f-9d89-8d2476596cee","type":"PanTool"},{"attributes":{"axis_label":"Submissions","formatter":{"id":"8bd2dd6a-b275-4f65-baad-4a6ef8db78f9","type":"BasicTickFormatter"},"plot":{"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5806d7c-4004-4e46-8145-a88fb36411ac","type":"BasicTicker"}},"id":"ebb838f2-2978-441a-b99d-1644e3760502","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"8852e5a2-9bd6-4b4b-bbe9-28b957254324","type":"HBar"},{"attributes":{"plot":{"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"}},"id":"baa334f5-216e-4ee0-abd9-6b15e38c5918","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"95a9dc08-2265-42c5-b905-cb439e1478a7","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"},"ticker":{"id":"54abf58a-2ee9-48d2-8fb3-02d2f3aac2de","type":"BasicTicker"}},"id":"db0fc9d5-0661-4e1b-b9cf-09ae61661d10","type":"Grid"},{"attributes":{"data_source":{"id":"ed8f2ddf-927f-4605-a0a9-e4bbe84c62ec","type":"ColumnDataSource"},"glyph":{"id":"49025066-6acf-40e6-8a1e-1b76444b0ea0","type":"Text"},"hover_glyph":null,"nonselection_glyph":{"id":"f7e61cd2-a154-44ed-a5d5-b4fe1d137929","type":"Text"},"selection_glyph":null},"id":"60ad1e79-e814-4a4f-bd2c-e84603bfe3ee","type":"GlyphRenderer"},{"attributes":{"callback":null,"plot":{"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"},"tooltips":[["affiliations","@text"],["submissions","@x"]]},"id":"38d8faf3-6ccf-434d-b24b-63f77d2119f3","type":"HoverTool"},{"attributes":{"plot":{"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5806d7c-4004-4e46-8145-a88fb36411ac","type":"BasicTicker"}},"id":"64b3ddce-6466-46ad-8e78-8c33288eebc8","type":"Grid"},{"attributes":{"plot":{"id":"d13dd756-b5ac-44e0-8d68-632141a1bbf4","subtype":"Figure","type":"Plot"}},"id":"32244ef8-1651-4fd7-b1e3-501032f10872","type":"ResetTool"},{"attributes":{"plot":null,"text":"Submissions by affiliation","text_font_size":{"value":"24pt"}},"id":"8f786ef3-d16c-4274-8fc4-53468fb07b63","type":"Title"},{"attributes":{},"id":"54abf58a-2ee9-48d2-8fb3-02d2f3aac2de","type":"BasicTicker"},{"attributes":{},"id":"92215767-ab62-422b-8c67-aa10a1dd1e28","type":"ToolEvents"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"f7e61cd2-a154-44ed-a5d5-b4fe1d137929","type":"Text"},{"attributes":{"callback":null,"column_names":["y","x","y_text","x_text","text"],"data":{"text":["us.ibm.com","cs.ucl.ac.uk","purdue.edu","cvc.uab.cat","nec-labs.com","cs.ucla.edu","skoltech.ru","inria.fr","cs.nyu.edu","uci.edu","washington.edu","samsung.com","mcgill.ca","gatech.edu","cornell.edu","nvidia.com","polymtl.ca","baidu.com","salesforce.com","technion.ac.il","tsinghua.edu.cn","adobe.com","usc.edu","intel.com","uchicago.edu","ox.ac.uk","cam.ac.uk","uva.nl","cs.umass.edu","cs.washington.edu","harvard.edu","twitter.com","ttic.edu","columbia.edu","ucl.ac.uk","illinois.edu","ed.ac.uk","umich.edu","mit.edu","ibm.com","toronto.edu","nyu.edu","openai.com","stanford.edu","cmu.edu","microsoft.com","facebook.com","umontreal.ca","berkeley.edu","google.com"],"x":[4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,12,13,13,17,21,21,29,34,37,38,40,97],"x_text":[6,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,14,15,15,19,23,23,31,36,39,40,42,99],"y":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"y_text":[-0.8,0.19999999999999996,1.2,2.2,3.2,4.2,5.2,6.2,7.2,8.2,9.2,10.2,11.2,12.2,13.2,14.2,15.2,16.2,17.2,18.2,19.2,20.2,21.2,22.2,23.2,24.2,25.2,26.2,27.2,28.2,29.2,30.2,31.2,32.2,33.2,34.2,35.2,36.2,37.2,38.2,39.2,40.2,41.2,42.2,43.2,44.2,45.2,46.2,47.2,48.2]}},"id":"ed8f2ddf-927f-4605-a0a9-e4bbe84c62ec","type":"ColumnDataSource"},{"attributes":{},"id":"e5806d7c-4004-4e46-8145-a88fb36411ac","type":"BasicTicker"},{"attributes":{},"id":"635875c4-47ee-4fa6-a759-be730413bc38","type":"BasicTickFormatter"},{"attributes":{},"id":"8bd2dd6a-b275-4f65-baad-4a6ef8db78f9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ed8f2ddf-927f-4605-a0a9-e4bbe84c62ec","type":"ColumnDataSource"},"glyph":{"id":"b6a09c56-b055-4a0e-b4e9-da641f05b112","type":"HBar"},"hover_glyph":{"id":"e40ff36a-2142-4fae-9411-ea3ed41dc3a6","type":"HBar"},"nonselection_glyph":{"id":"8852e5a2-9bd6-4b4b-bbe9-28b957254324","type":"HBar"},"selection_glyph":null},"id":"3bcc118c-1979-4af3-a9a3-f47d5c88f26f","type":"GlyphRenderer"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x_text"},"y":{"field":"y_text"}},"id":"49025066-6acf-40e6-8a1e-1b76444b0ea0","type":"Text"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"x"},"y":{"field":"y"}},"id":"b6a09c56-b055-4a0e-b4e9-da641f05b112","type":"HBar"}],"root_ids":["d13dd756-b5ac-44e0-8d68-632141a1bbf4"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"b043696b-9f30-4f43-b575-6ad40ac27b40","elementid":"dac7f49e-d471-43a8-a6f4-0124f0267d23","modelid":"d13dd756-b5ac-44e0-8d68-632141a1bbf4"}];
                  
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