//mongoDB files
var conf = require('../configuration');
var mongoose = require('mongoose');
//var mongoConnectString = "mongodb://localhost/ulboracms";
var mongoConnectString = "mongodb://";//localhost/ulboracms";
//this is specific to RedHat's OpenShift 
if (process.env.DOCKER_MONGODB_NAME && process.env.DOCKER_MONGODB_USERNAME) {
    mongoConnectString += (process.env.DOCKER_MONGODB_USERNAME + ":" +
            process.env.DOCKER_MONGODB_PASSWORD + "@" +
            process.env.DOCKER_MONGODB_HOST + ':' +
            process.env.DOCKER_MONGODB_PORT + '/' +
            process.env.DOCKER_MONGODB_NAME);
    //this is specific to a Docker self contained containers
} else if (process.env.DOCKER_MONGODB_NAME) {
    mongoConnectString += (conf.HOST + "/" + process.env.DOCKER_MONGODB_NAME);
    //this is specific to a Docker data containers
} else if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    mongoConnectString = (process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME);
} else if (process.env.ULBORA_CMS_DATABASE_NAME && process.env.ULBORA_CMS_DATABASE_USERNAME) {
    // the database information is set in system variables and uses authentication
    mongoConnectString = (process.env.ULBORA_CMS_DATABASE_USERNAME + ":" +
            process.env.ULBORA_CMS_DATABASE_PASSWORD + "@" +
            process.env.ULBORA_CMS_DATABASE_HOST + ':' +
            process.env.ULBORA_CMS_DATABASE_PORT + '/' +
            process.env.ULBORA_CMS_DATABASE_NAME);

} else if (process.env.ULBORA_CMS_DATABASE_NAME) {
    mongoConnectString += (conf.ULBORA_CMS_DATABASE_HOST + "/" + conf.ULBORA_CMS_DATABASE_NAME);
}else if(process.env.MONGO_PORT_27017_TCP_ADDR){
    //this is the default database
    mongoConnectString += (process.env.MONGO_PORT_27017_TCP_ADDR + "/" + process.env.DOCKER_ULBORACMS_DATABASE_NAME);
}else {
    //this is the default database
    mongoConnectString += (conf.HOST + "/" + conf.DATABASE_NAME);
}
//---------add other mongoDB configuration blocks here----------------
//--------------------------------------------------------------------
mongoose.connect(mongoConnectString);
var manager = require('../managers/managerCommon');
//--------------------------- gọi schema
var accessLevelSchema = require('../databaseSchema/access_level_Schema');
var databaseVersionSchema = require('../databaseSchema/database_version_Schema');
var deparmentSchema = require('../databaseSchema/deparment_Schema');
var deparmentPositionSchema = require('../databaseSchema/deparment_position_Schema');
var newsCategorySchema = require('../databaseSchema/news_category_Schema');
var newsSchema = require('../databaseSchema/news_Schema');
var positionSchema = require('../databaseSchema/position_Schema');
var productGroupSchema = require('../databaseSchema/product_group_Schema');
var productSchema = require('../databaseSchema/product_Schema');
var sysActionLogSchema = require('../databaseSchema/sys_action_log_Schema');
var sysFunctionRoleSchema = require('../databaseSchema/sys_function_role_Schema');
var sysFunctionSchema = require('../databaseSchema/sys_function_Schema');
var sysMenuRoleSchema = require('../databaseSchema/sys_menu_role_Schema');
var sysMenuSchema = require('../databaseSchema/sys_menu_Schema');
var sysRoleSchema = require('../databaseSchema/sys_role_Schema');
var sysUserSchema = require('../databaseSchema/sys_user_Schema');
var userDeparmentPositionSchema = require('../databaseSchema/user_deparment_position_Schema');
var languageSchema = require('../databaseSchema/language_Schema');
var templateSchema=require('../databaseSchema/template_Schema');
var ruleDeclarationSchema=require('../databaseSchema/rule_declaration_Schema');
var mailServerSchema=require('../databaseSchema/mail_server_Schema');
var sectionSchema=require('../databaseSchema/section_Schema');
var categorySchema=require('../databaseSchema/category_Schema');
var locationSchema=require('../databaseSchema/location_Schema');
var templateEngineSchema=require('../databaseSchema/template_engine_Schema');
//--------------- convert schema to object
var access_level = mongoose.model('access_level', accessLevelSchema);
var database_version = mongoose.model('database_version', databaseVersionSchema);
var deparment=mongoose.model('deparment', deparmentSchema);
var deparment_position=mongoose.model('deparment_position', deparmentPositionSchema);
var news_category=mongoose.model('news_category', newsCategorySchema);
var news=mongoose.model('news', newsSchema);
var position=mongoose.model('position', positionSchema);
var product_group=mongoose.model('product_group', productGroupSchema);
var product=mongoose.model('product', productSchema);
var sys_action_log=mongoose.model('sys_action_log', sysActionLogSchema);
var sys_function_role=mongoose.model('deparment', sysFunctionRoleSchema);
var sys_function=mongoose.model('sys_function', sysFunctionSchema);
var sys_menu_role=mongoose.model('sys_menu_role', sysMenuRoleSchema);
var sys_menu=mongoose.model('sys_menu', sysMenuSchema);
var sys_role=mongoose.model('sys_role', sysRoleSchema);
var sys_user=mongoose.model('sys_user', sysUserSchema);
var user_department_position=mongoose.model('user_department_position', userDeparmentPositionSchema);
var language=mongoose.model('sys_user', languageSchema);
var template=mongoose.model('template', templateSchema);
var rule_declaration=mongoose.model('rule_declaration', ruleDeclarationSchema);
var mail_server=mongoose.model('mail_server', mailServerSchema);
var section=mongoose.model('section', sectionSchema);
var category=mongoose.model('category', categorySchema);
var location=mongoose.model('location', locationSchema);
var template_engine=mongoose.model('template_engine', templateEngineSchema);

//--------------- Khỏi tạo phương thức get list cho đối tượng
exports.getAccessLevel = function () {
    return access_level;
};
exports.getDatabaseVersion = function () {
    return database_version;
};
exports.getDeparment = function () {
    return deparment;
};
exports.getDeparmentPosition = function () {
    return deparment_position;
};
exports.getNewsCategory = function () {
    return news_category;
};
exports.getNews = function () {
    return news;
};
exports.getPosition = function () {
    return position;
};
exports.getProductGroup = function () {
    return product_group;
};
exports.getProduct = function () {
    return product;
};
exports.getSysActionLog = function () {
    return sys_action_log;
};
exports.getSysFunctionRole = function () {
    return sys_function_role;
};
exports.getSysFunction = function () {
    return sys_function;
};
exports.getSysMenuRole = function () {
    return sys_menu_role;
};
exports.getSysRole = function () {
    return sys_role;
};
exports.getSysMenu = function () {
    return sys_menu;
};
getSysUser = function () {
    return sys_user;
};
exports.getUserDeparmentPosition = function () {
    return user_department_position;
};
exports.getLanguage = function () {
    return language;
};
exports.getTemplate = function () {
    return template;
};
exports.getRuleDeclaration=function()
{
    return rule_declaration;
}
exports.getMailServer=function()
{
    return mail_server;
}
exports.getSection=function()
{
    return section;
}
exports.getCategory=function()
{
    return category;
}
exports.getLocation=function()
{
    return location;
}
exports.getTemplateEngine=function()
{
    return template_engine;
}

//initialize the mongoDB database with needed records required for startup
exports.initializeMongoDb = function () {
    //check if databaseVersion record is set
    initializeDatabaseVersion();
};
// Kiểm tra version của database
initializeDatabaseVersion = function () {
    database_version.find({}, function (err, results) {
        if (err) {
            console.log("databaseVersion Error:" + err);
        } else {
            console.log("DatabaseVersion:" + JSON.stringify(results));
            if (results.length === 0) {
                var versionRecord = {
                    version: "1.0.0"
                };
                var dbVer = new database_version(versionRecord);
                dbVer.save(function (err) {
                    if (err) {
                        console.log("databaseVersion save error: " + err);
                    } else {
                        //check if roles are in database
                        initializeRoles();
                    }
                });
            } else {
                //check if roles are in database
                initializeRoles();
            }
        }
    });
};
//Kiểm tra quyền trong database
initializeRoles = function () {
    //check if roles are in database
    sys_role.find({}, function (err, results) {
        if (err) {
            console.log("Role Error:" + err);
        } else {
            console.log("Role:" + JSON.stringify(results));
            if (results.length === 0) {
                var superAdminRecord = {
                    name: manager.ROLE_SUPER_ADMIN
                };
                var adminRecord = {
                    name: manager.ROLE_ADMIN
                };
                var authorRecord = {
                    name: manager.ROLE_AUTHOR
                };
                var userRecord = {
                    name: manager.ROLE_USER
                };
                var role = new sys_role(superAdminRecord);
                role.save(function (err) {
                    if (err) {
                        console.log("super admin role save error: " + err);
                    } else {
                        role = new sys_role(adminRecord);
                        role.save(function (err) {
                            if (err) {
                                console.log("admin role save error: " + err);
                            } else {
                                role = new sys_role(authorRecord);
                                role.save(function (err) {
                                    if (err) {
                                        console.log("author role save error: " + err);
                                    } else {
                                        role = new sys_role(userRecord);
                                        role.save(function (err) {
                                            if (err) {
                                                console.log("user role save error: " + err);
                                            } else {
                                                //check if default users are in database
                                                initializeDefaultUsers();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            } else {
                //check if default users are in database
                initializeDefaultUsers();
            }
        }
    });
};
// Kiểm tra người dùng mặc định
initializeDefaultUsers = function () {
    //check if default users are in database
    sys_role.findOne({name: manager.ROLE_SUPER_ADMIN}, function (err, roleResults) {
        if (err) {
            console.log("lookup super admin role error:" + err);
        } else {
            console.log("role:" + JSON.stringify(roleResults));
            var superAdmimRole = roleResults.toObject();
            sys_user.find({}, function (err, results) {
                if (err) {
                    console.log("user Error:" + err);
                } else {
                    console.log("user:" + JSON.stringify(results));
                    if (results.length === 0) {
                        var hashedPassword = manager.hashPasswordSync("admin", "admin");
                        var adminUserRecord = {
                            username: "admin",
                            password: hashedPassword,
                            passwordHash: "",
                            firstName: "Trương Văn",
                            lastName:"Thành",
                            avatar:"",
                            email:"thanh9tvt@gmail.com",
                            mobile:"0987570855",
                            address:"Hà Nội",
                            sex:true,
                            birthday:09/10/1993,
                            point:null,
                            token:null,
                            createDate:07/12/2016,
                            createBy:"admin",
                            updateDate:null,
                            updateBy:null,
                            isDeleted:false,
                            isActive:true,
                            lastLoginDate:null,
                            lastChangePassword:null,
                            roleID:superAdmimRole
                        };
                        var u = new sys_user(adminUserRecord);
                        u.save(function (err) {
                            if (err) {
                                console.log("super admin user save error: " + err);
                            } else {
                                //check if accessLevel or in database
                                initializeAccessLevels();
                            }
                        });

                    } else {
                        //check if accessLevel or in database
                        initializeAccessLevels();
                    }
                }
            });
        }
    });
};

initializeAccessLevels = function () {
    //check if accessLevel or in database
    access_level.find({}, function (err, results) {
        if (err) {
            console.log("accessLevels Error:" + err);
        } else {
            console.log("accessLevels:" + JSON.stringify(results));
            if (results.length === 0) {
                var publicAccessLevelRecord = {
                    name: manager.ACCESS_LEVEL_PUBLIC
                };
                var userAccessLevelRecord = {
                    name: manager.ACCESS_LEVEL_USER
                };
                var acc = new access_level(publicAccessLevelRecord);
                acc.save(function (err) {
                    if (err) {
                        console.log("public accessLevels save error: " + err);
                    } else {
                        acc = new access_level(userAccessLevelRecord);
                        acc.save(function (err) {
                            if (err) {
                                console.log("user accessLevels save error: " + err);
                            } else {
                                //check if english language is in database
                                initializeLanguage();
                            }
                        });
                    }
                });
            } else {
                //check if english language is in database
                initializeLanguage();
            }
        }
    });
};
// Khai báo ngôn ngữ
initializeLanguage = function () {
    //check if english language is in database
    language.find({}, function (err, results) {
        if (err) {
            console.log("language Error:" + err);
        } else {
            console.log("language:" + JSON.stringify(results));
            if (results.length === 0) {
                var englishLanguageRecord = {
                    name: "English US",
                    defaultLanguage: true,
                    code: "en-us"
                };
                var vietnamLanguageRecord = {
                    name: "Vietnam",
                    defaultLanguage: false,
                    code: "vi"
                };
                var lan = new language(englishLanguageRecord);
                lan.save(function (err) {
                    if (err) {
                        console.log("english language save error: " + err);
                    } else {
                        lan = new language(vietnamLanguageRecord);
                        lan.save(function (err) {
                            if (err) {
                                console.log("vietnam language save error: " + err);
                            } else {
                                //initial template
                                initializeTemplate();
                            }
                        });
                    }
                });
            } else {
                //initial template
                initializeTemplate();
            }
        }
    });
};
// Khỏi tạo template
initializeTemplate = function () {
    //check if in database
    template.find({}, function (err, results) {
        if (err) {
            console.log("template Error:" + err);
        } else {
            console.log("template:" + JSON.stringify(results));
            if (results.length === 0) {
                var templateRecord = {
                    name: "default",
                    defaultTemplate: true,
                    angularTemplate: false
                };
                var tmp = new template(templateRecord);
                tmp.save(function (err) {
                    if (err) {
                        console.log("template save error: " + err);
                    } else {
                        var template2Record = {
                            name: "BlogPost",
                            defaultTemplate: false
                        };
                        var tmp2 = new Template(template2Record);
                        tmp2.save(function (err) {
                            var template3Record = {
                                name: "CleanBlog",
                                defaultTemplate: false
                            };
                            var tmp3 = new Template(template3Record);
                            tmp3.save(function (err) {
                                if (err) {
                                    console.log("template3 save error: " + err);
                                } else {
                                    //rules declaration
                                    initializeRulesDeclaration();
                                }
                            });
                        });
                    }
                });
            } else {
                //rules declaration
                initializeRulesDeclaration();
            }
        }
    });
};
//Khai nguyên tắc
initializeRulesDeclaration = function () {
    //check if in database
    rule_declaration.find({}, function (err, results) {
        if (err) {
            console.log("rules Error:" + err);
        } else {
            console.log("rules:" + JSON.stringify(results));
            if (results.length === 0) {
                var ruleDeclarationRecord = {
                    name: manager.REQUIRE_PUBLISH_APPROVAL_RULE_NAME,
                    ruleKey: manager.REQUIRE_PUBLISH_APPROVAL_RULE_KEY
                };
                var rule = new rule_declaration(ruleDeclarationRecord);
                console.log("rules obj:" + JSON.stringify(ruleDeclarationRecord));
                rule.save(function (err) {
                    if (err) {
                        console.log("rule save error: " + err);
                    } else {
                        //mail server
                        initializeMailServer();
                    }
                });
            } else {
                //mail server
                initializeMailServer();
            }
        }
    });
};
//Mail Server
initializeMailServer = function () {
    //check if in database
    mail_server.find({}, function (err, results) {
        if (err) {
            console.log("mail server Error:" + err);
        } else {
            console.log("mail server:" + JSON.stringify(results));
            if (results.length === 0) {
                var mserv = {
                    smtpHost: null,
                    smtpPort: null,
                    username: null,
                    password: null,
                    authMethod: null,
                    tls: null
                };
                var mserver = new mail_server(mserv);
                console.log("mail server:" + JSON.stringify(mserv));
                mserver.save(function (err) {
                    if (err) {
                        console.log("mail server save error: " + err);
                    } else {
                        // check Section
                        initialSections();
                    }
                });
            } else {
                 // check Section
                initialSections();
            }
        }
    });
};
// check Section
initialSections = function () {
    //check if is in database
    language.findOne({code: "en-us"}, function (lanErr, lan) {
        if (!lanErr && lan !== undefined && lan !== null) {
            section.find({}, function (err, results) {
                if (err) {
                    console.log("section Error:" + err);
                } else {
                    console.log("sections:" + JSON.stringify(results));
                    if (results.length === 0) {

                        var secVal = {
                            name: null,
                            languageID: null
                        };
                        secVal.name = "About";
                        secVal.language = lan._id;

                        var sec = new section(secVal);
                        console.log("section:" + JSON.stringify(secVal));
                        sec.save();

                        secVal.name = "Contacts";
                        sec = new section(secVal);
                        console.log("section:" + JSON.stringify(secVal));
                        sec.save();

                        secVal.name = "MainPage";
                        sec = new section(secVal);
                        console.log("section:" + JSON.stringify(secVal));
                        sec.save();

                        secVal.name = "News";
                        sec = new section(secVal);
                        console.log("section:" + JSON.stringify(secVal));
                        sec.save();
                        //Khai báo Category
                        initialCategories();
                    } else {
                        //Khai báo Category
                        initialCategories();
                    }
                }
            });
        }
    });
};
//Khai báo Category
initialCategories = function () {
    //check if is in database
    language.findOne({code: "en-us"}, function (lanErr, lan) {
        if (!lanErr && lan !== undefined && lan !== null) {
            Category.find({}, function (err, results) {
                if (err) {
                    console.log("category Error:" + err);
                } else {
                    console.log("catagory:" + JSON.stringify(results));
                    if (results.length === 0) {
                        var catVal = {
                            name: null,
                            languageID: null
                        };
                        catVal.name = "News";
                        catVal.language = lan._id;

                        var cat = new category(catVal);
                        console.log("category:" + JSON.stringify(catVal));
                        cat.save();

                        catVal.name = "NewsFlash";
                        cat = new category(catVal);
                        console.log("category:" + JSON.stringify(catVal));
                        cat.save();
                        //int Location
                        initialLocations();
                    } else {
                        //int Location
                        initialLocations();
                    }
                }
            });
        }
    });
};
//int Location
initialLocations = function () {
    //check if is in database
    // Location.findOne({code: "en-us"}, function (lanErr, lan) {
    //if (!lanErr && lan !== undefined && lan !== null) {
    location.find({}, function (err, results) {
        if (err) {
            console.log("Location Error:" + err);
        } else {
            console.log("Location:" + JSON.stringify(results));
            if (results.length === 0) {

                var locVal = {
                    name: null
                };
                locVal.name = "Center";

                var loc = new location(locVal);
                console.log("Location:" + JSON.stringify(locVal));
                loc.save();

                locVal.name = "Right";
                loc = new location(locVal);
                console.log("Location:" + JSON.stringify(locVal));
                loc.save();

                locVal.name = "Left";
                loc = new location(locVal);
                console.log("Location:" + JSON.stringify(locVal));
                loc.save();

                locVal.name = "TopMenu";
                locVal.menu = true;
                loc = new location(locVal);
                console.log("Location:" + JSON.stringify(locVal));
                loc.save();
                // init template Engine
                initializeTemplateEngine();
            } else {
                // init template Engine
                initializeTemplateEngine();
            }
        }
    });
};
// init template Engine
initializeTemplateEngine = function () {
    //check if in database
    template_engine.find({}, function (err, results) {
        if (err) {
            console.log("template Engine Error:" + err);
        } else {
            console.log("template  Engine:" + JSON.stringify(results));
            if (results.length === 0) {
                var templateEngineRecord = {
                    name: "EJS",
                    defaultEngine: false,
                    engine: "ejs",
                    ext: "ejs"
                };
                var tmpEng = new template_engine(templateEngineRecord);
                tmpEng.save(function (err) {
                    if (err) {
                        console.log("template Engine save error: " + err);
                    } else {
                        var template2Record = {
                            name: "Handlebars (hbs)",
                            defaultEngine: true,
                            engine: "hbs",
                            ext: "hbs"
                        };
                        var tmpEng2 = new template_engine(template2Record);
                        tmpEng2.save(function (err) {
                            if (err) {
                                console.log("template Engine 2 save error: " + err);
                            } else {
                                var template3Record = {
                                    name: "Jade",
                                    defaultEngine: false,
                                    engine: "jade",
                                    ext: "jade"
                                };
                                var tmpEng3 = new template_engine(template3Record);
                                tmpEng3.save(function (err) {
                                    if (err) {
                                        console.log("template Engine 3 save error: " + err);
                                    } else {
                                        //rules declaration
                                        //initializeRulesDeclaration();
                                    }
                                });
                            }
                        });
                    }
                });
            } else {
                //rules declaration
                //initializeRulesDeclaration();
            }
        }
    });
};
