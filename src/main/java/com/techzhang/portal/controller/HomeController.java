package com.techzhang.portal.controller;

import com.techzhang.portal.service.ManifestService;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Value("${service.tag}")
    private String tag;

    @Autowired
    private ManifestService manifestService;

    @RequestMapping(value = "/")
    public String index(Map<String, Object> model) {
        model.put("tag", this.tag);
        if(manifestService.getData()!=null){
            model.put("app_css", manifestService.getData().get("app.css"));
            model.put("vendor_js", manifestService.getData().get("vendor.js"));
            model.put("app_js", manifestService.getData().get("app.js"));
            model.put("app_js", manifestService.getData().get("app.js"));
        }
        return "index";
    }

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String any(Map<String, Object> model) {
        model.put("tag", this.tag);
        if(manifestService.getData()!=null){
            model.put("app_css", manifestService.getData().get("app.css"));
            model.put("vendor_js", manifestService.getData().get("vendor.js"));
            model.put("app_js", manifestService.getData().get("app.js"));
        }
        return "index";
    }
}
