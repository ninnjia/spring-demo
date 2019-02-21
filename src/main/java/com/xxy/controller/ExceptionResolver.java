package com.xxy.controller;

import org.springframework.boot.autoconfigure.web.servlet.error.AbstractErrorController;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.NoHandlerFoundException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by xuxinying on 19-1-19.
 */
@Controller
public class ExceptionResolver extends AbstractErrorController implements HandlerExceptionResolver{

    public ExceptionResolver(ErrorAttributes errorAttributes) {
        super(errorAttributes);
    }

    @RequestMapping("/error1")
    public String getErrorPath() {
        System.out.println("正在处理异常。。。。。。");
        return "您这个页面失败了呀";
    }
    @RequestMapping("/error")
    @ResponseBody
    public String getErrorPath2(Throwable ex,
                                HttpServletRequest request,
                                HttpServletResponse response){

        return "11111111111111111111111111111111"+response.getStatus()+ex.getMessage();
    }


    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        ex.printStackTrace();
        ModelAndView mv = new ModelAndView();
            /*  使用response返回    */
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value()); //设置状态码
        response.setContentType(MediaType.APPLICATION_JSON_VALUE); //设置ContentType
        response.setCharacterEncoding("UTF-8"); //避免乱码
        response.setHeader("Cache-Control", "no-cache, must-revalidate");
        try {
            response.getWriter().write("已经格式化+"+ex.getMessage());
        } catch (IOException e) {
        }
        return mv;
    }
}