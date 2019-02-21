package com.xxy.mapper;

import com.xxy.entity.DutyRule;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DutyRuleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(DutyRule record);

    int insertSelective(DutyRule record);

    DutyRule selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(DutyRule record);

    int updateByPrimaryKey(DutyRule record);

    List<DutyRule> selectAll();
}