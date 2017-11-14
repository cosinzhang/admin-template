package com.techzhang.portal.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by zhanghaijun on 2017/11/14.
 */
@RestController
public class HelloController {


    @RequestMapping("/hello")
    public String index(){
        return "Hello World! This is index page";
    }

}
