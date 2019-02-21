package com.xxy.service;

import com.xxy.entity.DutyRule;
import com.xxy.mapper.DutyRuleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

/**
 * Created by xuxinying on 19-1-19.
 */
@Service
public class HelloServiceImpl implements HelloService{
    @Autowired
    private DutyRuleMapper dutyRuleMapper;

    @Override
    public List<String> getList() {
        String[] arr = {"1","2","3","4","五"};
        return Arrays.asList(arr);
    }

    @Override
    public List<DutyRule> getDutyRuleList() {
        return this.dutyRuleMapper.selectAll();

    }
}
