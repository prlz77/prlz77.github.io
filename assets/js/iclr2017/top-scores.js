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
      };var element = document.getElementById("8aa81d43-7a25-4219-a737-24609bd96642");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8aa81d43-7a25-4219-a737-24609bd96642' but no matching script tag was found. ")
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
                  var docs_json = {"b94282a1-3fee-485e-95ad-2aee4cf7b644":{"roots":{"references":[{"attributes":{"callback":null},"id":"86b4f545-7b8a-4d44-bed2-a2ce08a37ffb","type":"DataRange1d"},{"attributes":{"callback":null,"end":12},"id":"46959d4d-55b2-475e-a0ac-dc5144142259","type":"Range1d"},{"attributes":{"below":[{"id":"da796f16-9dfd-468c-9993-cd38710df688","type":"LinearAxis"}],"left":[{"id":"b7e0bb48-b8dc-43f5-8138-1ccda1ef481f","type":"LinearAxis"}],"renderers":[{"id":"da796f16-9dfd-468c-9993-cd38710df688","type":"LinearAxis"},{"id":"1c2aeae8-043f-458a-bce3-7bad55aafb36","type":"Grid"},{"id":"b7e0bb48-b8dc-43f5-8138-1ccda1ef481f","type":"LinearAxis"},{"id":"782e7658-4034-49ce-a0ec-8c53fcccd96b","type":"Grid"},{"id":"ab0c1595-5b2a-495c-9def-5f9d87bb771f","type":"GlyphRenderer"}],"title":{"id":"d39cb502-dcaf-414c-886f-4b82a330a17e","type":"Title"},"tool_events":{"id":"0ffd55be-ea3f-4e92-bb8d-97c0d0ce401f","type":"ToolEvents"},"toolbar":{"id":"4c5413dc-b1ec-475a-8a12-1b65fea20c20","type":"Toolbar"},"x_range":{"id":"46959d4d-55b2-475e-a0ac-dc5144142259","type":"Range1d"},"y_range":{"id":"86b4f545-7b8a-4d44-bed2-a2ce08a37ffb","type":"DataRange1d"}},"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":{"id":"147faa36-cc21-4a5a-8f4b-11bb93b341aa","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"4f1be059-cb6b-438a-bd34-bc391a670320","type":"HoverTool"},{"id":"835f23b0-6801-4a81-b305-7ada02745faa","type":"TapTool"},{"id":"a3e42aa9-2139-4b14-9c34-ce3f1fd14c6c","type":"ResetTool"},{"id":"7dd16ac3-815b-4ec7-9b47-22d4a01a2b7c","type":"PanTool"},{"id":"147faa36-cc21-4a5a-8f4b-11bb93b341aa","type":"WheelZoomTool"}]},"id":"4c5413dc-b1ec-475a-8a12-1b65fea20c20","type":"Toolbar"},{"attributes":{"axis_label":"Submission","formatter":{"id":"b516becf-ab22-444e-8afd-bd1360093daa","type":"BasicTickFormatter"},"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b4d0031-2ed6-4834-8ded-9b0571477774","type":"BasicTicker"}},"id":"b7e0bb48-b8dc-43f5-8138-1ccda1ef481f","type":"LinearAxis"},{"attributes":{"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"}},"id":"7dd16ac3-815b-4ec7-9b47-22d4a01a2b7c","type":"PanTool"},{"attributes":{"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"}},"id":"147faa36-cc21-4a5a-8f4b-11bb93b341aa","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.8},"line_color":{"value":"#1f77b4"},"right":{"field":"score"},"y":{"field":"y"}},"id":"a4b90d75-5a93-453d-a8f3-784ff8050780","type":"HBar"},{"attributes":{"callback":null,"column_names":["confidence","title","ids","score","authors","y"],"data":{"authors":["Minjoon Seo; Aniruddha Kembhavi; Ali Farhadi; Hannaneh Hajishirzi","Jonathon Cai; Richard Shin; Dawn Song","Soroush Mehri; Kundan Kumar; Ishaan Gulrajani; Rithesh Kumar; Shubham Jain; Jose Manuel Rodriguez Sotelo; Aaron Courville; Yoshua Bengio","Nicolas Papernot; Mart\u00edn Abadi; \u00dalfar Erlingsson; Ian Goodfellow; Kunal Talwar","Jason Tyler Rolfe","Chris J. Maddison; Andriy Mnih; Yee Whye Teh","Samuel S. Schoenholz; Justin Gilmer; Surya Ganguli; Jascha Sohl-Dickstein","Martin Arjovsky; Leon Bottou","Barret Zoph; Quoc Le","Chiyuan Zhang; Samy Bengio; Moritz Hardt; Benjamin Recht; Oriol Vinyals"],"confidence":[5.0,4.0,3.6666666666666665,3.6666666666666665,3.3333333333333335,4.5,3.5,4.25,4.333333333333333,3.6666666666666665],"ids":["HJ0UKP9ge","BkbY4psgg","SkxKPDv5xl","HkwoSDPgg","ryMxXPFex","S1jE5L5gl","H1W1UN9gg","Hk4_qw5xe","r1Ue8Hcxg","Sy8gdB9xx"],"score":[8.0,8.333333333333334,8.333333333333334,8.333333333333334,8.333333333333334,8.5,8.5,8.75,9.0,9.666666666666666],"title":["Bidirectional Attention Flow for Machine Comprehension","Making Neural Programming Architectures Generalize via Recursion","SampleRNN: An Unconditional End-to-End Neural Audio Generation Model","Semi-supervised Knowledge Transfer for Deep Learning from Private Training Data","Discrete Variational Autoencoders","The Concrete Distribution: A Continuous Relaxation of Discrete Random Variables","Deep Information Propagation","Towards Principled Methods for Training Generative Adversarial Networks","Neural Architecture Search with Reinforcement Learning","Understanding deep learning requires rethinking generalization"],"y":[0,1,2,3,4,5,6,7,8,9]}},"id":"eafca530-320a-4c6e-b6da-4b269f16d43b","type":"ColumnDataSource"},{"attributes":{},"id":"b516becf-ab22-444e-8afd-bd1360093daa","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Score","formatter":{"id":"c3a3dbd7-07c7-4726-9978-d9101ed856bc","type":"BasicTickFormatter"},"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e2b5fb4-8a6c-4e3a-a42a-c7182c913a49","type":"BasicTicker"}},"id":"da796f16-9dfd-468c-9993-cd38710df688","type":"LinearAxis"},{"attributes":{"url":"https://openreview.net/forum?id=@ids"},"id":"3a603c71-38b0-4c75-a7ea-d90415ad66ff","type":"OpenURL"},{"attributes":{"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e2b5fb4-8a6c-4e3a-a42a-c7182c913a49","type":"BasicTicker"}},"id":"1c2aeae8-043f-458a-bce3-7bad55aafb36","type":"Grid"},{"attributes":{},"id":"5b4d0031-2ed6-4834-8ded-9b0571477774","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"score"},"y":{"field":"y"}},"id":"7c405aad-b083-4f11-8ad1-6bdd62e2ba4f","type":"HBar"},{"attributes":{"callback":{"id":"3a603c71-38b0-4c75-a7ea-d90415ad66ff","type":"OpenURL"},"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"}},"id":"835f23b0-6801-4a81-b305-7ada02745faa","type":"TapTool"},{"attributes":{},"id":"c3a3dbd7-07c7-4726-9978-d9101ed856bc","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Top 10 rated papers","text_font_size":{"value":"24pt"}},"id":"d39cb502-dcaf-414c-886f-4b82a330a17e","type":"Title"},{"attributes":{"callback":null,"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"},"tooltips":[["title","@title"],["authors","@authors"],["score","@score"],["confidence","@confidence"]]},"id":"4f1be059-cb6b-438a-bd34-bc391a670320","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b4d0031-2ed6-4834-8ded-9b0571477774","type":"BasicTicker"}},"id":"782e7658-4034-49ce-a0ec-8c53fcccd96b","type":"Grid"},{"attributes":{},"id":"0ffd55be-ea3f-4e92-bb8d-97c0d0ce401f","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_color":{"value":"#1f77b4"},"right":{"field":"score"},"y":{"field":"y"}},"id":"9c5b9806-6181-4b79-bb2c-7ec4549b6fa8","type":"HBar"},{"attributes":{"data_source":{"id":"eafca530-320a-4c6e-b6da-4b269f16d43b","type":"ColumnDataSource"},"glyph":{"id":"a4b90d75-5a93-453d-a8f3-784ff8050780","type":"HBar"},"hover_glyph":{"id":"9c5b9806-6181-4b79-bb2c-7ec4549b6fa8","type":"HBar"},"nonselection_glyph":{"id":"7c405aad-b083-4f11-8ad1-6bdd62e2ba4f","type":"HBar"},"selection_glyph":null},"id":"ab0c1595-5b2a-495c-9def-5f9d87bb771f","type":"GlyphRenderer"},{"attributes":{},"id":"0e2b5fb4-8a6c-4e3a-a42a-c7182c913a49","type":"BasicTicker"},{"attributes":{"plot":{"id":"a5cee38c-4381-4575-bd4a-2f3b9f138447","subtype":"Figure","type":"Plot"}},"id":"a3e42aa9-2139-4b14-9c34-ce3f1fd14c6c","type":"ResetTool"}],"root_ids":["a5cee38c-4381-4575-bd4a-2f3b9f138447"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"b94282a1-3fee-485e-95ad-2aee4cf7b644","elementid":"8aa81d43-7a25-4219-a737-24609bd96642","modelid":"a5cee38c-4381-4575-bd4a-2f3b9f138447"}];
                  
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