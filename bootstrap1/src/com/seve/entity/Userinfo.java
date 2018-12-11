package com.seve.entity;



public class Userinfo {
    private Integer uuid;

    private String uname;
    private int begin;
    private int pagesize;
    
    

    public int getBegin()
    {
        return begin;
    }

    public void setBegin(int begin)
    {
        this.begin = begin;
    }

    public int getPagesize()
    {
        return pagesize;
    }

    public void setPagesize(int pagesize)
    {
        this.pagesize = pagesize;
    }

    public Integer getUuid() {
        return uuid;
    }

    public void setUuid(Integer uuid) {
        this.uuid = uuid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname == null ? null : uname.trim();
    }
}