﻿using System;
using System.IO;
using System.Net;
using System.Text;
using System.Web;

namespace QiBuBlog.Util
{
    public class Helper
    {
        public static string GetIpAddress()
        {
            string userIp;
            try
            {
                userIp = !string.IsNullOrWhiteSpace(HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"]) ? HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"] : HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
                if (string.IsNullOrWhiteSpace(userIp))
                {
                    userIp = HttpContext.Current.Request.UserHostAddress;
                }
            }
            catch (Exception)
            {
                userIp = "127.0.0.1";
            }
            return userIp;
        }
    }
}
