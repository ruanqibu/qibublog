//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace QiBuBlog.Entity
{
    using System;
    
    public partial class GetArticleById_Result
    {
        public string ArticleId { get; set; }
        public string CategoryId { get; set; }
        public string Title { get; set; }
        public string Keywords { get; set; }
        public short SummarySize { get; set; }
        public string Summary { get; set; }
        public string Content { get; set; }
        public int ViewCount { get; set; }
        public int CommentCount { get; set; }
        public byte Weight { get; set; }
        public string CreateUserId { get; set; }
        public System.DateTime CreateTime { get; set; }
        public byte Status { get; set; }
        public string CategoryName { get; set; }
        public string CreateUserName { get; set; }
    }
}
