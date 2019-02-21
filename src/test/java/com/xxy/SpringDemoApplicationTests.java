package com.xxy;

import com.xxy.service.HelloService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;


@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringDemoApplicationTests {

	@Autowired
	private HelloService helloService;
	@Test
	public void contextLoads() {
		List<String> list = this.helloService.getList();
		System.out.println(list);
	}
	@Test
	public void mainTest(){
		List<Integer> list = Arrays.asList(1,2,3,4,5,6,7,8,9);
		System.out.println(list);
		System.out.println(this.filterList(list,SpringDemoApplicationTests::dayu));
		System.out.println(this.filterList(list,SpringDemoApplicationTests::xiaoyu));
		System.out.println(this.filterList(list,(Integer integer) -> integer > 5));
		System.out.println(this.filterList(list,(Integer integer) -> integer < 5));
	}
    public static boolean dayu(Integer integer) {
		return integer > 5;
	}
	public static boolean xiaoyu(Integer integer) {
		return integer < 5;
	}
	public List<Integer> filterList(List<Integer> list, Predicate<Integer> p){
		List<Integer> newList = new ArrayList<>(16);
		list.forEach(i -> {
			if(p.test(i)){
				newList.add(i);
			}
		});
		return newList;
	}


}

