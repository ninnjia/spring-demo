package com.xxy;

import com.xxy.controller.HelloController;
import com.xxy.service.HelloService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


import java.util.Arrays;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@RunWith(SpringRunner.class)
@WebMvcTest(HelloController.class)
public class SpringControllerApplicationTests {

	@Autowired
	private MockMvc mvc;
	@MockBean
	private HelloService helloService;
	@Test
	public void testMvc() throws Exception {
		List<String> list = Arrays.asList(new String[]{"1", "2", "3", "4", "五"});
		given(this.helloService.getList()).willReturn(list);
		mvc.perform(get("/list"))
				.andExpect(content()
						.json("['1','2','3','4','五']"));
	}


}

