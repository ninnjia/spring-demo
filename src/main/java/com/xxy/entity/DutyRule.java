package com.xxy.entity;

import java.util.Date;

public class DutyRule {
    private Integer id;

    private String ruleName;

    private String ruleDesc;

    private Byte systemType;

    private Integer branchId;

    private String branchName;

    private Integer checkItemId;

    private String checkItemName;

    private Byte checkType;

    private String checkValue;

    private Float timeInterval;

    private String devices;

    private Byte dataState;

    private Date updateTime;

    private Date startTime;

    private Date createTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRuleName() {
        return ruleName;
    }

    public void setRuleName(String ruleName) {
        this.ruleName = ruleName == null ? null : ruleName.trim();
    }

    public String getRuleDesc() {
        return ruleDesc;
    }

    public void setRuleDesc(String ruleDesc) {
        this.ruleDesc = ruleDesc == null ? null : ruleDesc.trim();
    }

    public Byte getSystemType() {
        return systemType;
    }

    public void setSystemType(Byte systemType) {
        this.systemType = systemType;
    }

    public Integer getBranchId() {
        return branchId;
    }

    public void setBranchId(Integer branchId) {
        this.branchId = branchId;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName == null ? null : branchName.trim();
    }

    public Integer getCheckItemId() {
        return checkItemId;
    }

    public void setCheckItemId(Integer checkItemId) {
        this.checkItemId = checkItemId;
    }

    public String getCheckItemName() {
        return checkItemName;
    }

    public void setCheckItemName(String checkItemName) {
        this.checkItemName = checkItemName == null ? null : checkItemName.trim();
    }

    public Byte getCheckType() {
        return checkType;
    }

    public void setCheckType(Byte checkType) {
        this.checkType = checkType;
    }

    public String getCheckValue() {
        return checkValue;
    }

    public void setCheckValue(String checkValue) {
        this.checkValue = checkValue == null ? null : checkValue.trim();
    }

    public Float getTimeInterval() {
        return timeInterval;
    }

    public void setTimeInterval(Float timeInterval) {
        this.timeInterval = timeInterval;
    }

    public String getDevices() {
        return devices;
    }

    public void setDevices(String devices) {
        this.devices = devices == null ? null : devices.trim();
    }

    public Byte getDataState() {
        return dataState;
    }

    public void setDataState(Byte dataState) {
        this.dataState = dataState;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}