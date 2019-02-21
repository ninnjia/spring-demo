package com.xxy.controller;

import com.xxy.entity.DutyRule;
import com.xxy.service.HelloService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import java.awt.datatransfer.StringSelection;
import java.io.IOException;
import java.util.List;

/**
 * Created by xuxinying on 19-1-14.
 */
@Controller
@RequestMapping("/")
public class HelloController {
    private Log log = LogFactory.getLog(HelloController.class);
    @Autowired
    RestTemplateBuilder restTemplateBuilder;


    @RequestMapping("/test")
    public String getTest() throws Exception {
        log.debug("-------------------------");
        throw new Exception("hahahaha");
//        return "It's successful!!!!";
    }
    @Autowired
    private HelloService helloService;

    @ResponseBody
    @RequestMapping("/dutyRuleList")
    public List<DutyRule> list(){
        return this.helloService.getDutyRuleList();
    }
    @RequestMapping("/list")
    public List<String> getList(){
        RestTemplate client = restTemplateBuilder.build();
        String forObject = client.getForObject("https://api.weigongxue.com/posts", String.class);
        System.out.println(forObject);
        return this.helloService.getList();
    }

    @RequestMapping("/test1")
    public String getTest2() {
        new Thread(() -> {
            System.out.println("lambda");
        }).start();
//        new Thread(){
//            @Override
//            public void run() {
//                System.out.println("旧的方法");
//            }
//        }.start();

        return "It's successful2!!!??????!!!";
    }
    @RequestMapping("/test2")
    public String getTest3(HttpServletResponse response) throws IOException {
        return "It's successful3sss!!!!!!";
    }
}
