package com.xxy;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@SpringBootApplication
@MapperScan(basePackages="com.xxy.mapper")
public class SpringDemoApplication {


	public static void main(String[] args) {
		SpringApplication.run(SpringDemoApplication.class, args);
	}

}

