﻿using QiBuBlog.Entity;
using QiBuBlog.Entity.Helper;
using System;
using System.Linq;

namespace QiBuBlog.Service
{
    public class SetupService
    {
        private readonly EFRepositoryBase<Setup, object> _setup = new EFRepositoryBase<Setup, object>();
        
        public Setup GetSetup()
        {
            return _setup.Entities.FirstOrDefault();
        }

        public bool UpdateSetup(Setup model)
        {
            return _setup.Update(model) > 0;
        }
    }
}
