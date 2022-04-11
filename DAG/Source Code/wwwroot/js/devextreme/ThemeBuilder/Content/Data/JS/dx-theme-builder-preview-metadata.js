ThemeBuilder.__badges_group = function() { return {
"id": "badges", 
"doNotRenderPageTitle": true,
"widgets": [
    { 
	    "name": "dxList",
	    "supportedThemes": ["all"],
	    "options": { 
		    "dataSource": [
			    { "text": "first", "badge": "127" },
			    { "text": "second" }
		    ]
	    }
    },
    { 
	    "name": "dxNavBar",
	    "supportedThemes": ["all"],
	    "options": { 
		    "dataSource": [
			    { "text": "user", "icon": "user" },
			    { "text": "find", "icon": "find" },
			    { "text": "favorites", "icon": "favorites" },
			    { "text": "about", "icon": "info" },
			    { "text": "home", "icon": "home", "badge": 77 },
			    { "text": "URI", "icon": "tips", "disabled": true }
		    ]
	    }
    }
]
};};
ThemeBuilder.__base_common_group = function() { return {
"id": "base.common",
"doNotRenderPageTitle": true,
"useFieldsetForThemes": ["ios7-default", "win8-black", "win8-white", "android5-light"],
"widgets": [
        {
		"name": "dxMenu",
		"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
		"options": {
			"showFirstSubmenuMode": "onHover",
			"animation": {
                "show": false,
                "hide": false
            },
			"items": [
	{
		"text": ".NET",
		"items": [
			{
				"text": "Individual Platforms",
				"items": ["WinForms", "ASP.NET", "MVC", "WPF", "Silverlight", "Windows 8 XAML"],
				"selected": true,
				"selectable": true
			}, 
			{
				"text": "Frameworks",
				"items": ["eXpressApp Framework"]
			}, 
			{
				"text": "Code-Debug-Refactor",
				"items": ["CodeRush for Visual Studio"]
			}, 
			{
				"text": "Mobile (HTML JS)",
				"items": ["DevExtreme"]
			}, 
			{
				"text": "Cross-Platform",
				"items": ["Reporting", "Document Generation"]
			}, 
			{
				"text": "Enterprise Tools",
				"items": ["Report Server", "Analytics Dashboard"]
			}
		]
	}, 
	{
		"text": "HTML JavaScript",
		"items": [
			{
				"text": "Mobile",
				"items": ["Phone JS"]
			}, 
			{
				"text": "HTML 5 JS Widgets",
				"items": ["Chart JS"]
			}
		]
	}, 
	{
		"text": "iOS 7",
		"items": [
			{
				"text": "Native",
				"items": ["DataExplorer"]
			}
		]
	}, 
	{
		"text": "Testing Tools",
		"items": [
			{
				"text": "Web Testing Tools",
				"items": ["TestCafe"]
			}
		]
	}, 
	{
		"text": "Delphi & C++Builder",
		"disabled": true
	}
]
		}
	},
	{
	"name": "dxDataGrid",
	"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
	"options": {
		"rowAlternationEnabled": true,
		"dataSource": {
		"asyncLoadEnabled": false,
		"store": {
		"data": [
			{
				"CustomerID" : "VINET",
				"Freight" : "32.3800",
				"ShipCountry" : "France",
				"ShipName" : "Vins et alcools Chevalier"
			}, 
			{
				"CustomerID" : "TOMSP",
				"Freight" : "11.6100",
				"ShipCountry" : "Germany",
				"ShipName" : "Toms Spezialitaten"
			}, 
			{
				"CustomerID" : "HANAR1",
				"Freight" : "65.8300",
				"ShipCountry" : "Brazil",
				"ShipName" : "Hanari Carnes"
			}, 
			{
				"CustomerID" : "VICTE",
				"Freight" : "41.3400",
				"ShipCountry" : "France",
				"ShipName" : "Richter Supermarkt"
			}, 
			{
				"CustomerID" : "SUPRD",
				"Freight" : "51.3000",
				"ShipCountry" : "Belgium",
				"ShipName" : "Victuailles en stock"
			}, 
			{
				"CustomerID" : "HANAR",
				"Freight" : "58.1700",
				"ShipCountry" : "Brazil",
				"ShipName" : "Supremes delices"
			}, 
			{
				"CustomerID" : "CHOPS",
				"Freight" : "22.9800",
				"ShipCountry" : "Switzerland",
				"ShipName" : "Hanari Carnes"
			}, 
			{
				"CustomerID" : "RICSU",
				"Freight" : "148.3300",
				"ShipCountry" : "Switzerland",
				"ShipName" : "Chop-suey Chinese"
			}, 
			{
				"CustomerID" : "WELLI",
				"Freight" : "13.9700",
				"ShipCountry" : "Brazil",
				"ShipName" : "Richter Supermarkt"
			}, 
			{
				"CustomerID" : "HILAA",
				"Freight" : "81.9100",
				"ShipCountry" : "Venezuela",
				"ShipName" : "Wellington Importadora"
			}, 
			{
				"CustomerID" : "ERNSH",
				"Freight" : "140.5100",
				"ShipCountry" : "Austria",
				"ShipName" : "Ernst Handel"
			},
			{
				
				"CustomerID": "CENTC",
				"Freight": "3.2500",
				"ShipCountry": "Mexico",
				"ShipName": "Centro comercial Moctezuma"
			},
			{
				
				"CustomerID": "OTTIK",
				"Freight": "55.0900",
				"ShipCountry": "Germany",
				"ShipName": "Ottilies Kaseladen"
			},
			{
		
				"CustomerID": "QUEDE",
				"Freight": "3.0500",
				"ShipCountry": "Brazil",
				"ShipName": "Que Delicia"
			},
			{
				"CustomerID": "RATTC",
				"Freight": "48.2900",
				"ShipCountry": "USA",
				"ShipName": "Rattlesnake Canyon Grocery"
			},
			{
				"CustomerID": "FOLKO",
				"Freight": "3.6700",
				"ShipCountry": "Sweden",
				"ShipName": "Folk och fa HB"
			},
			{
				"CustomerID": "BLONP",
				"Freight": "55.2800",
				"ShipCountry": "France",
				"ShipName": "Blondel pere et fils"
			},
			{
				"CustomerID": "WARTH",
				"Freight": "25.7300",
				"ShipCountry": "Finland",
				"ShipName": "Wartian Herkku"
			},
			{
				"CustomerID": "FRANK",
				"Freight": "208.5800",
				"ShipCountry": "Germany",
				"ShipName": "Frankenversand"
			},
			{
				"CustomerID": "GROSR",
				"Freight": "66.2900",
				"ShipCountry": "Venezuela",
				"ShipName": "GROSELLA-Restaurante"
			}
		],
		"type": "array",
		"key": "CustomerID"
		}
		},
		"selectedRowKeys": ["TOMSP", "SUPRD"],
		"height": "400px",
		"paging": {
			"pageSize": 10
		},
		"pager": {
			"showPageSizeSelector": true
		},
		"selection": {
			"mode": "multiple"
		},
		"hoverStateEnabled": true,
		"allowColumnResizing": true,
		"allowColumnReordering": true,
		"columns": [
			"ShipName",
			"Freight",
			"ShipCountry"
		]
	}
},
{
			"name": "dxCalendar",
			"prerenderAction": "SET_CALENDAR_VALUE",
			"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
			"options": { 
				"firstDayOfWeek": 0
			}
		},
		{
			"name": "dxSelectBox",
			"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
			"options": {
				"items": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
			}
		},
		{
			"name": "dxSelectBox",
			"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
			"options": {
				"items": ["Bob", "John", "Frank", "Robert", "Paul", "Elizabeth", "Mary"]
			}
		},
		{
		"name": "dxSlider",
		"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
		"options": {
			"min": 0, 
			"max": 100, 
			"value": 38
		}
	},
	{  
			"name": "dxLookup",
			"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
			"options": {
				"items": ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio",
				"San Diego", "Dallas", "San Jose", "Jacksonville", "Indianapolis", "Austin", "San Francisco",
				"Columbus", "Fort Worth", "Charlotte", "Detroit", "El Paso", "Memphis", "Boston", "Seattle",
				"Denver", "Baltimore", "Washington", "Nashville", "Louisville", "Milwaukee", "Portland", "Oklahoma"],
				"popupHeight": 500
			}
		},
		{
			"name": "dxButton",
			"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
			"options": {
				"text": "Reset",
				"type": "normal"
			}
		},
		{
			"name": "dxButton",
			"supportedThemes": ["generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact"],
			"options": {
				"text": "Send",
				"type": "normal"
			}
		},
		{
			"name": "dxTextBox",
			"title": "dxTextBox",
			"supportedThemes": ["ios7-default", "win8-black", "win8-white", "android5-light"],
			"options": {
				"value": "Textbox widget"
            }
		},
        {
			"name": "dxSelectBox",
			"title": "dxSelectBox",
			"supportedThemes": ["ios7-default", "win8-black", "win8-white", "android5-light"],
			"options": {
				"items": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
			}
		},
		{  
			"name": "dxLookup",
			"title": "dxLookup",
			"supportedThemes": ["ios7-default", "win8-black", "win8-white", "android5-light"],
			"options": {
				"items": ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio",
				"San Diego", "Dallas", "San Jose", "Jacksonville", "Indianapolis", "Austin", "San Francisco",
				"Columbus", "Fort Worth", "Charlotte", "Detroit", "El Paso", "Memphis", "Boston", "Seattle",
				"Denver", "Baltimore", "Washington", "Nashville", "Louisville", "Milwaukee", "Portland", "Oklahoma"],
				"popupHeight": 500
			}
		},
		{
			"name": "dxCheckBox",
			"title": "dxCheckBox",
			"supportedThemes": ["ios7-default", "win8-black", "win8-white", "android5-light"],
			"options": {
				"checked": true
            }
		},
		{
			"name": "dxSwitch",
			"title": "dxSwitch",
			"supportedThemes": ["ios7-default", "win8-black", "win8-white", "android5-light"],
			"options": { 
				"value": true
			}
		},
		{
			"name": "dxSwitch",
			"title": "Disabled dxSwitch",
			"supportedThemes": ["ios7-default", "win8-black", "win8-white", "android5-light"],
			"options": { 
				"disabled": true,
				"value": true
			}
		},
		{
			"name": "dxButton",
			"title": "dxButton",
			"supportedThemes": ["ios7-default", "win8-black", "win8-white"],
			"options": {
				"text": "Normal Button",
				"type": "normal"
			}
		}
    ]
};};
ThemeBuilder.__base_typography_group = function() { return {
"id": "base.typography", 
"widgets": [
    {
        "name": "dxScrollView",
        "supportedThemes": [ "generic-light", "generic-dark", "generic-light-compact", "generic-dark-compact", "win8-black", "win8-white"],
        "prerenderAction": "LOAD_GENERIC_TYPOGRAPHY_CONTENT",
        "options": { }
    },
    {
		"name": "dxScrollView",
		"supportedThemes": ["android5-light"],
		"prerenderAction": "LOAD_ANDROID5_TYPOGRAPHY_CONTENT",
		"options": { }
	},
    {
		"name": "dxScrollView",
		"supportedThemes": ["ios7-default"],
		"prerenderAction": "LOAD_IOS7_TYPOGRAPHY_CONTENT",
		"options": { }
	}
]
};};
ThemeBuilder.__buttons_danger_group = function() { return {
"id": "buttons.danger", 
"widgets": [
    {
        "name": "dxButton",
        "supportedThemes": [ "generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact", "win8-black", "win8-white", "android5-light" ],
        "options": {
            "text": "Danger",
            "type": "danger"
        }
    },
    {
		"name": "dxButton",
		"supportedThemes": ["ios7-default"],
		"options": {
			"text": "Danger",
            "type": "danger",
            "icon": "clear" 
		}
	}
]
};};
ThemeBuilder.__buttons_default_group = function() { return {
"id": "buttons.default", 
"widgets": [
    {
        "name": "dxButton",
        "supportedThemes": [ "generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact", "win8-black", "win8-white", "android5-light" ],
        "options": {
            "text": "Default",
            "type": "default"
        }
    },
    {
		"name": "dxButton",
		"supportedThemes": ["ios7-default"],
		"options": {
			"text": "Default",
            "type": "default",
            "icon": "info"
		}
	}
]
};};
ThemeBuilder.__buttons_flat_group = function() { return {
    "id": "buttons.flat",
    "doNotRenderPageTitle": true,
    "useFieldsetForThemes": [ "android5-light" ],
    "widgets": [
        {
            "name": "dxButton",
            "title": "Flat button",
			"supportedThemes": ["android5-light"],
			"options": {
				"text": "Button",
				"type": "normal"
			}
		}
    ]
};};
ThemeBuilder.__buttons_normal_group = function() { return {
"id": "buttons.normal", 
"widgets": [
	{
			"name": "dxButton",
			"supportedThemes": ["all"],
			"options": {
				"text": "Normal",
				"type": "normal"
			}
		}
]
};};
ThemeBuilder.__buttons_success_group = function() { return {
"id": "buttons.success", 
"widgets": [
    {
        "name": "dxButton",
        "supportedThemes": [ "generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact", "win8-black", "win8-white", "android5-light" ],
        "options": {
            "text": "Success",
            "type": "success"
        }
    },

    {
		"name": "dxButton",
		"supportedThemes": ["ios7-default"],
		"options": {
			"text": "Success",
            "type": "success",
            "icon":  "gift"
		}
    }
]
};};
ThemeBuilder.__datagrid_group = function() { return {
    "id": "datagrid",
    "ord": 4,
    "widgets": [
        {
            "name": "dxDataGrid",
            "supportedThemes": [ "all" ],
            "options": {
                "columnChooser": { "enabled": true },
                "rowAlternationEnabled": true,
                "dataSource": {
                    "asyncLoadEnabled": false,
                    "store": [
                        {
                            "CustomerID": "VINET",
                            "OrderDate": "1996/07/04",
                            "Freight": "32.3800",
                            "ShipName": "Vins et alcools Chevalier",
                            "ShipCity": "Reims",
                            "ShipCountry": "France"
                        },
                        {
                            "CustomerID": "TOMSP",
                            "OrderDate": "1996/07/05",
                            "Freight": "11.6100",
                            "ShipName": "Toms Spezialitaten",
                            "ShipCity": "Munster",
                            "ShipCountry": "Germany"
                        },
                        {
                            "CustomerID": "HANAR",
                            "OrderDate": "1996/07/08",
                            "Freight": "65.8300",
                            "ShipName": "Hanari Carnes",
                            "ShipCity": "Rio de Janeiro",
                            "ShipCountry": "Brazil"
                        },
                        {
                            "CustomerID": "VICTE",
                            "OrderDate": "1996/07/08",
                            "Freight": "41.3400",
                            "ShipName": "Victuailles en stock",
                            "ShipCity": "Lyon",
                            "ShipCountry": "France"
                        },
                        {
                            "CustomerID": "SUPRD",
                            "OrderDate": "1996/07/09",
                            "Freight": "51.3000",
                            "ShipName": "Supremes delices",
                            "ShipCity": "Charleroi",
                            "ShipCountry": "Belgium"
                        },
                        {
                            "CustomerID": "HANAR",
                            "OrderDate": "1996/07/10",
                            "Freight": "58.1700",
                            "ShipName": "Hanari Carnes",
                            "ShipCity": "Rio de Janeiro",
                            "ShipCountry": "Brazil"
                        },
                        {
                            "CustomerID": "CHOPS",
                            "OrderDate": "1996/07/11",
                            "Freight": "22.9800",
                            "ShipName": "Chop-suey Chinese",
                            "ShipCity": "Bern",
                            "ShipCountry": "Switzerland"
                        },
                        {
                            "CustomerID": "RICSU",
                            "OrderDate": "1996/07/12",
                            "Freight": "148.3300",
                            "ShipName": "Richter Supermarkt",
                            "ShipCity": "Geneve",
                            "ShipCountry": "Switzerland"
                        },
                        {
                            "CustomerID": "WELLI",
                            "OrderDate": "1996/07/15",
                            "Freight": "13.9700",
                            "ShipName": "Wellington Importadora",
                            "ShipCity": "Resende",
                            "ShipCountry": "Brazil"
                        },
                        {
                            "CustomerID": "HILAA",
                            "OrderDate": "1996/07/16",
                            "Freight": "81.9100",
                            "ShipName": "HILARION-Abastos",
                            "ShipCity": "San Cristobal",
                            "ShipCountry": "Venezuela"
                        },
                        {
                            "CustomerID": "ERNSH",
                            "OrderDate": "1996/07/17",
                            "Freight": "140.5100",
                            "ShipName": "Ernst Handel",
                            "ShipCity": "Graz",
                            "ShipCountry": "Austria"
                        }
                    ]
                },
                "filterRow": {
                    "visible": true
                },
                "height": "500px",
                "paging": {
                    "pageSize": 10
                },
                "pager": {
                    "showPageSizeSelector": true
                },
                "searchPanel": {
                    "visible": true
                },
                "groupPanel": {
                    "visible": true
                },
                "selection": {
                    "mode": "multiple"
                },
                "hoverStateEnabled": true,
                "allowColumnResizing": true,
                "allowColumnReordering": true,
                "editing": {
                    "editEnabled": true,
                    "removeEnabled": true,
                    "editMode": "batch"
                },
                "columns": [
                    {
                        "dataField": "CustomerID",
                        "allowFiltering": false
                    },
                    {
                        "dataField": "OrderDate",
                        "dataType": "date"
                    },
                    "ShipName",
                    {
                        "dataField": "ShipCity",
                        "groupIndex": 0,
                        "filterOperations": [ "startswith", "contains", "=" ]
                    },
                    {
                        "dataField": "ShipCountry",
                        "filterOperations": false,
                        "selectedFilterOperation": "startswith"
                    },
                    "Freight"
                ],
                "summary": {
                    "totalItems": [
                        {
                            "column": "Freight",
                            "summaryType": "sum",
                            "displayFormat": "Total: {0}"
                        }
                    ],
                    "groupItems": [
                        {
                            "column": "CustomerID",
                            "summaryType": "count"
                        }
                    ]
                }
            }
        }
    ]
};};
ThemeBuilder.__editors_autocomplete_group = function() { return {
"id": "editors.autocomplete",
"ord": 3,
"widgets": [
		{ 
			"name": "dxAutocomplete",
			"supportedThemes": ["all"],
			"options": {
				"items": ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio",
						"San Diego", "Dallas", "San Jose", "Jacksonville", "Indianapolis", "Austin", "San Francisco",
						"Columbus", "Fort Worth", "Charlotte", "Detroit", "El Paso", "Memphis", "Boston", "Seattle",
						"Denver", "Baltimore", "Washington", "Nashville", "Louisville", "Milwaukee", "Portland", "Oklahoma"],
				"placeholder": "Enter city name"
			}
		}
]
};};
ThemeBuilder.__editors_calendar_group = function() { return {
"id": "editors.calendar", 
"widgets": [
		{
			"name": "dxCalendar",
			"supportedThemes": ["all"],
			"options": { }
		}
]
};};
ThemeBuilder.__editors_checkbox_group = function() { return {
"id": "editors.checkbox",
"ord": 4,
"widgets": [
	{
			"name": "dxCheckBox",
			"title": "dxCheckBox",
			"supportedThemes": ["all"],
			"options": {
				"checked": true
            }
		},
		{
			"name": "dxCheckBox",
			"title": "Disabled dxCheckBox",
			"supportedThemes": ["all"],
			"options": {
				"disabled": true
            }
		}
]
};};
ThemeBuilder.__editors_colorbox_group = function() { return {
"id": "editors.colorbox", 
"widgets": [
		{
			"name": "dxColorBox",
			"supportedThemes": ["all"],
			"options": {
				"value": "rgba(89, 168, 61, .7)",
				"editAlphaChannel": true
			}
		}
]
};};
ThemeBuilder.__editors_fileuploader_group = function() { return {
    "id": "editors.fileuploader",
    "widgets": [
        {
            "name": "dxFileUploader",
            "supportedThemes": [ "all" ],
            "options": { }
        }
    ]
};};
ThemeBuilder.__editors_lookup_group = function() { return {
"id": "editors.lookup", 
"ord": 6,
"widgets": [
{  
			"name": "dxLookup",
			"supportedThemes": ["all"],
			"options": {
				"items": ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio",
				"San Diego", "Dallas", "San Jose", "Jacksonville", "Indianapolis", "Austin", "San Francisco",
				"Columbus", "Fort Worth", "Charlotte", "Detroit", "El Paso", "Memphis", "Boston", "Seattle",
				"Denver", "Baltimore", "Washington", "Nashville", "Louisville", "Milwaukee", "Portland", "Oklahoma"],
				"popupHeight": 500,
				"usePopover": false
			}
		}
]
};};
ThemeBuilder.__editors_numberbox_group = function() { return {
"id": "editors.numberbox", 
"widgets": [
		{
			"name": "dxNumberBox",
			"supportedThemes": ["all"],
			"options": {
				"showSpinButtons": true
            }
		}
]
};};
ThemeBuilder.__editors_radiogroup_group = function() { return {
"id": "editors.radiogroup", 
"ord": 7,
"widgets": [
{
			"name": "dxRadioGroup",
			"supportedThemes": ["all"],
			"options": {
				"items": ["Tea", "Coffee", "Juice"],
				"selectedIndex": 0
			}
		}
]
};};
ThemeBuilder.__editors_selectbox_group = function() { return {
"id": "editors.selectbox", 
"widgets": [
		{
			"name": "dxSelectBox",
			"title": "dxSelectBox",
			"supportedThemes": ["all"],
			"options": {
				"items": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
			}
		}
]
};};
ThemeBuilder.__editors_switch_group = function() { return {
"id": "editors.switch", 
"ord": 8,
"widgets": [
{
			"name": "dxSwitch",
			"title": "dxSwitch",
			"supportedThemes": ["all"],
			"options": { }
		},
		{
			"name": "dxSwitch",
			"title": "Disabled dxSwitch",
			"supportedThemes": ["all"],
			"options": { 
				"disabled": true,
				"value": true
			}
		}
]
};};
ThemeBuilder.__editors_tagbox_group = function() { return {
    "id": "editors.tagbox",
    "widgets": [
        {
            "name": "dxTagBox",
            "supportedThemes": ["all"],
            "options": {
                "items": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            }
        }
    ]
};};
ThemeBuilder.__editors_texteditors_group = function() { return {
	"id": "editors.texteditors", 
	"ord": 9,
	"widgets": [
		{
			"name": "dxTextBox",
			"title": "dxTextBox",
			"supportedThemes": ["all"],
			"options": {
				"placeholder": "Text box widget",
				"mode": "search"
            }
		},
		{
			"name": "dxTextArea",
			"title": "dxTextArea",
			"supportedThemes": ["all"],
			"options": {
				"value": "Multiline text box widget"
            }
		}
	]
};};
ThemeBuilder.__editors_validation_group = function() { return {
    "id": "editors.validation",
    "widgets": [
        {

            "name": "dxTextBox",
            "title": "Name",
            "supportedThemes": [ "all" ],
            "afterRenderAction": "VALIDATION_ACTION",
            "options": {
                "placeholder": "Name",
                "validationOptions": {
                    "name": "Name",
                    "validationRules": [
                        {
                            "type": "required"
                        }
                    ]
                }
            }
        },
        {

            "name": "dxTextBox",
            "title": "Password",
            "supportedThemes": [ "all" ],
            "afterRenderAction": "VALIDATION_ACTION",
            "options": {
                "placeholder": "Password",
                "mode":  "password",
                "validationOptions": {
                    "name": "Password",
                    "validationRules": [
                        {
                            "type": "required"
                        }
                    ]
                }
            }
        }
    ]
};};
ThemeBuilder.__gallery_group = function() { return {
"id": "gallery",
"ord": 9,
"widgets": [
	{  
		"name": "dxGallery",
		"supportedThemes": ["all"],
		"options": { 
			"items": [
				"Content/Images/person1.png",
				"Content/Images/person2.png",
				"Content/Images/person3.png",
				"Content/Images/person4.png"
			],
			"showNavButtons": true,
            "height": 320,
            "width":  500
		}
	}
]
};};
ThemeBuilder.__layouts_desktop_group = function() { return {
    "id": "layouts.desktop",
    "application": {
        "layoutSet": [
            {
                "controllerExpr": "DevExpress.framework.html.DefaultLayoutController",
                "controllerOptions": {
                    "name": "desktop",
                    "disableViewLoadingState": true
                }
            }
        ],
        "layouts": [
            "Desktop"
        ],
        "views": [
            "list",
            "about",
            "details"
        ],
        "navigation": [
            {
                "title": "Items",
                "onExecute": "#list",
                "icon": "home"
            },
            {
                "title": "About",
                "onExecute": "#about",
                "icon": "info"
            }
        ],
        "startupView": "list",
        "supportedThemes": [
            "generic-dark",
            "generic-light",
            "generic-light-compact",
            "generic-dark-compact"
        ]
    }
};};
ThemeBuilder.__layouts_split_group = function() { return {
    "id": "layouts.split",
    "application": {
        "device": {
            "deviceType": "tablet"
        },
        "layoutSet": [
            {
                "platform": "ios",
                "controllerExpr": "DevExpress.framework.html.IOSSplitLayoutController"
            },
            {
                "platform": "generic",
                "controllerExpr": "DevExpress.framework.html.IOSSplitLayoutController"
            },
            {
                "platform": "android",
                "controllerExpr": "DevExpress.framework.html.AndroidSplitLayoutController"
            }
        ],
        "views": [
            "list",
            "details"
        ],
        "layouts": [
            "simple",
            "empty",
            "split"
        ],
        "startupView": ["list", "details/0"],
        "supportedThemes": [
            "ios7-default",
            "generic-dark",
            "generic-light",
            "android5-light",
            "generic-light-compact",
            "generic-dark-compact"
        ]
    }
};};
ThemeBuilder.__list_group = function() { return {
"id": "list",
	"ord": 2,
	"widgets": [
		{ 
			"name": "dxList",
			"supportedThemes": ["all"],
			"options": {
				"grouped": true,
				"editEnabled": true,
				"editConfig": {
					"deleteEnabled": true,
					"selectionEnabled": true
				}, 
				"items": [
					{
						"key": "Group A",
						"items": [
							"Russia",
							"Czech",
							"Poland",
							"Greece"
						]
					},
					{
						"key": "Group B",
						"items": [
							"Germany",
							"Portugal",
							"Denmark",
							"Netherlands"
						]
					}
				]
			}
		}
	]
};};
ThemeBuilder.__navigations_accordion_group = function() { return {
    "id": "navigations.accordion",
    "widgets": [
        {
			"name": "dxAccordion",
			"supportedThemes": ["all"],
			"options": {
				
				"items": [
                    { "title":  "Jack London (1876-1916)", "html":  "<p>The Call of the Wild (1903)</p><p>Before Adam (1907)</p><p>Burning Daylight (1910)</p><p>The Abysmal Brute (1911)</p>"},
					{ "title":  "Mark Twain (1835-1910)", "html":  "<p>Screamers (1871)</p><p>Eye Openers (1871)</p><p>Colonel Sellers (1874)</p><p>Merry Tales (1892)</p>"}
				]
			}
		}
    ]
};};
ThemeBuilder.__navigations_menu_group = function() { return {
"id": "navigations.menu", 
"widgets": [
	{
		"name": "dxMenu",
		"supportedThemes": ["all"],
		"options": {
			"showFirstSubmenuMode": "onHover",
			"animation": {
                "show": false,
                "hide": false
            },
						"items": [
	{
		"text": ".NET",
		"items": [
			{
				"text": "Individual Platforms",
				"items": ["WinForms", "ASP.NET", "MVC", "WPF", "Silverlight", "Windows 8 XAML"],
				"selected": true,
				"selectable": true
			}, 
			{
				"text": "Frameworks",
				"items": ["eXpressApp Framework"]
			}, 
			{
				"text": "Code-Debug-Refactor",
				"items": ["CodeRush for Visual Studio"]
			}, 
			{
				"text": "Mobile (HTML JS)",
				"items": ["DevExtreme"]
			}, 
			{
				"text": "Cross-Platform",
				"items": ["Reporting", "Document Generation"]
			}, 
			{
				"text": "Enterprise Tools",
				"items": ["Report Server", "Analytics Dashboard"]
			}
		]
	}, 
	{
		"text": "HTML JavaScript",
		"items": [
			{
				"text": "Mobile",
				"items": ["Phone JS"]
			}, 
			{
				"text": "HTML 5 JS Widgets",
				"items": ["Chart JS"]
			}
		]
	}, 
	{
		"text": "iOS 7",
		"items": [
			{
				"text": "Native",
				"items": ["DataExplorer"]
			}
		]
	}, 
	{
		"text": "Testing Tools",
		"items": [
			{
				"text": "Web Testing",
				"items": ["TestCafe"]
			}
		]
	}, 
	{
		"text": "Delphi & C++Builder",
		"disabled": true
	}
]
		}
	}
]
};};
ThemeBuilder.__navigations_navbar_group = function() { return {
"id": "navigations.navbar",
"widgets": [
    { 
	    "name": "dxNavBar",
	    "supportedThemes": ["all"],
	    "options": { 
		    "dataSource": [
			    { "text": "user", "icon": "user" },
			    { "text": "find", "icon": "find" },
			    { "text": "favorites", "icon": "favorites" },
			    { "text": "about", "icon": "info" },
			    { "text": "home", "icon": "home", "badge": 77 },
			    { "text": "URI", "icon": "tips", "disabled": true }
		    ]
	    }
    }
]
};};
ThemeBuilder.__navigations_tabs_group = function() { return {
"id": "navigations.tabs", 
"widgets": [
{ 
		"name": "dxTabs",
		"supportedThemes": ["all"],
		"options": {  
			"dataSource": [
				{ "text": "user", "icon": "user" },
				{ "text": "comment", "icon": "comment" },
				{ "text": "find", "icon": "find" },
				{ "text": "disabled", "disabled": true }
			] 
		}
	}
]
};};
ThemeBuilder.__navigations_toolbar_group = function() { return {
"id": "navigations.toolbar", 
"widgets": [
	{ 
		"name": "dxToolbar",
		"supportedThemes": ["all"],
		"options": {
			"dataSource":[
				{ "location": "left", "widget": "button", "options": { "type": "back", "text": "Back" }},
				{ "location": "right", "widget": "button", "options": { "icon": "plus" } },
				{ "location": "right", "widget": "button", "options": { "icon": "find" } },
				{ "location": "center", "text": "Products" }
			]
		}
	}
]
};};
ThemeBuilder.__navigations_treeview_group = function() { return {
    "id": "navigations.treeview",
    "widgets": [
        {
            "name": "dxTreeView",
            "supportedThemes": [ "all" ],
            "prerenderAction":  "MAKE_TREEVIEW_BORDER",
            "options": {
                "showCheckBoxes": true,
                "selectAllEnabled": true,
                "items": [
                    {
                        "id": 1,
                        "text": ".NET",
                        "items": [
                            {
                                "id": 11,
                                "text": "Individual Platforms",
                                "items": [
                                    { "id": 111, "text": "WinForms" },
                                    { "id": 112, "text": "ASP.NET" },
                                    { "id": 113, "text": "MVC" },
                                    { "id": 114, "text": "WPF" },
                                    { "id": 115, "text": "Silverlight" },
                                    { "id": 116, "text": "Windows 8 XAML" }
                                ],
                                "selected": true,
                                "expanded": true
                            },
                            {
                                "id": 12,
                                "text": "Frameworks",
                                "items": [
                                    { "id": 121, "text": "eXpressApp Framework" }
                                ]
                            },
                            {
                                "id": 13,
                                "text": "Code-Debug-Refactor",
                                "items": [
                                    { "id": 131, "text": "CodeRush for Visual Studio" }
                                ]
                            },
                            {
                                "id": 14,
                                "text": "Mobile (HTML JS)",
                                "items": [
                                    { "id": 141, "text": "DevExtreme" }
                                ]
                            },
                            {
                                "id": 15,
                                "text": "Cross-Platform",
                                "items": [
                                    { "id": 151, "text": "Reporting" },
                                    { "id": 152, "text": "Document Generation" }
                                ]
                            },
                            {
                                "id": 16,
                                "text": "Enterprise Tools",
                                "items": [
                                    { "id": 161, "text": "Report Server" },
                                    { "id": 162, "text": "Analytics Dashboard" }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "text": "HTML JavaScript",
                        "items": [
                            {
                                "id": 21,
                                "text": "Mobile",
                                "items": [
                                    { "id": 211, "text": "Phone JS" }
                                ]
                            },
                            {
                                "id": 22,
                                "text": "HTML 5 JS Widgets",
                                "items": [
                                    { "id": 221, "text": "Chart JS" }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "text": "iOS 7",
                        "items": [
                            {
                                "id": 31,
                                "text": "Native",
                                "items": [
                                    { "id": 311, "text": "DataExplorer" }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "text": "Testing Tools",
                        "items": [
                            {
                                "id": 41,
                                "text": "Web Testing",
                                "items": [
                                    { "id": 441, "text": "TestCafe" }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "text": "Delphi & C++Builder"
                    }
                ]
            }
        }
    ]
};};
ThemeBuilder.__overlays_actionsheet_group = function() { return {
"id": "overlays.actionsheet", 
"widgets": [
	{
		"name": "dxButton",
		"supportedThemes": ["ios7-default", "android5-light"],
		"options": {
			"text": "Show actionsheet",
			"click": "SHOW_ACTIONSHEET"
		}
	},
{
		"name": "dxActionSheet",
		"supportedThemes": ["ios7-default", "android5-light"],
		"options": {
			"items": [
				{ "text": "Reply" },
				{ "text": "ReplyAll" },
				{ "text": "Forward" },
				{ "text": "Delete" }
			],
			"visible": false,
			"title": "ActionSheet"
		}
	}
]
};};
ThemeBuilder.__overlays_common_group = function() { return {
"id": "overlays.common", 
"widgets": [
	{
		"name": "dxButton",
		"title": "dxLoadPanel",
		"supportedThemes": ["all"],
		"options": {
			"text": "Show load panel",
			"click": "SHOW_LOAD_PANEL"
		}
	},
	{
		"name": "dxButton",
		"title": "dxPopup",
		"id": "popup-button",
		"supportedThemes": ["all"],
		"options": {
			"text": "Show popup",
			"click": "SHOW_POPUP"
		}
	},

	{
		"title": "Confirm dialog",
		"name": "dxButton",
		"supportedThemes": ["ios7-default", "win8-black", "win8-white", "android5-light"],
		"options": {
			"text": "Show confirm dialog",
			"click": "SHOW_CONFIRM_DIALOG"
		}
	},
	{
		"name": "dxButton",
		"title": "dxActionSheet",
		"supportedThemes": ["generic-light", "generic-dark", "win8-black", "win8-white", "generic-light-compact", "generic-dark-compact"],
		"options": {
			"text": "Show actionsheet",
			"click": "SHOW_ACTIONSHEET"
		}
	},
	{
		"name": "dxLoadPanel",
		"id": "load-panel-sample",
		"supportedThemes": ["all"],
		"options": { 
			"message": "Loading...",
			"closeOnOutsideClick": true,
			"visible": false
		}
	},
	{
		"name": "dxPopup",
		"id": "popup-sample",
		"supportedThemes": ["all"],
		"options": { 
			"closeOnOutsideClick": true,
			"visible": false,
			"showTitle": true,
			"title": "Popup title",
			"deferRendering": false
		}
	},
	{
		"name": "dxActionSheet",
		"supportedThemes": ["generic-light", "generic-dark", "win8-black", "win8-white", "generic-light-compact", "generic-dark-compact"],
		"options": {
			"items": [
				{ "text": "Reply" },
				{ "text": "ReplyAll" },
				{ "text": "Forward" },
				{ "text": "Delete" }
			],
			"visible": false,
			"title": "ActionSheet"
		}
	}
]
};};
ThemeBuilder.__overlays_toasts_group = function() { return {
"id": "overlays.toasts", 
"widgets": [
	{
		"name": "dxButton",
		"title": "Info Type",
		"supportedThemes": ["all"],
		"options": {
			"text": "Show info toast",
			"click": "SHOW_INFO_TOAST"
		}
 	},
	{
		"name": "dxButton",
		"title": "Warning Type",
		"supportedThemes": ["all"],
		"options": {
			"text": "Show warning toast",
			"click": "SHOW_WARNING_TOAST"
		}
 	},
	{
		"name": "dxButton",
		"title": "Error Type",
		"supportedThemes": ["all"],
		"options": {
			"text": "Show error toast",
			"click": "SHOW_ERROR_TOAST"
		}
 	},
	{
		"name": "dxButton",
		"title": "Success Type",
		"supportedThemes": ["all"],
		"options": {
			"text": "Show success toast",
			"click": "SHOW_SUCCESS_TOAST"
		}
 	},
	{
		"name": "dxToast",
		"id": "success-toast-sample",
		"supportedThemes": ["all"],
		"options": { 
			"message": "The toast message",
			"type": "success",
			"closeOnOutsideClick": true,
			"displayTime": 3000
		}
	},
	{
		"name": "dxToast",
		"id": "error-toast-sample",
		"supportedThemes": ["all"],
		"options": { 
			"message": "The toast message",
			"type": "error",
			"closeOnOutsideClick": true,
			"displayTime": 3000
		}
	},
	{
		"name": "dxToast",
		"id": "warning-toast-sample",
		"supportedThemes": ["all"],
		"options": { 
			"message": "The toast message",
			"type": "warning",
			"closeOnOutsideClick": true,
			"displayTime": 3000
		}
	},
	{
		"name": "dxToast",
		"id": "info-toast-sample",
		"supportedThemes": ["all"],
		"options": { 
			"message": "The toast message",
			"type": "info",
			"closeOnOutsideClick": true,
			"displayTime": 3000
		}
	}
]
};};
ThemeBuilder.__overlays_tooltip_group = function() { return {
"id": "overlays.tooltip", 
"widgets": [
{
		"name": "dxButton",
		"id": "tooltip-button",
		"supportedThemes": ["all"],
		"options": {
			"text": "Show tooltip",
			"click": "SHOW_TOOLTIP"
		}
	},
	{
		"name": "dxTooltip",
		"id": "tooltip-sample",
		"supportedThemes": ["all"],
		"options": { 
			"target": "#tooltip-button",
			"closeOnOutsideClick": true,
			"visible": false,
			"showTitle": false,
			"deferRendering": false,
			"text": "Show tooltip"
		}
	}
]
};};
ThemeBuilder.__pivotgrid_group = function() { return {
"id": "pivotgrid", 
"widgets": [
	{
        "name": "dxPivotGrid",
        "supportedThemes": [ "generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact" ],
        "options": {
			"allowSorting": true,
            "allowSortingBySummary": true,
            "allowExpandAll": true,
            "allowFiltering": true,
			"dataSource": {
                    "fields": [
                        { "dataField": "OrderDate", "dataType": "date", "groupName": "OrderDate", "area": "column" },
                        { "dataField": "OrderDate", "expanded": true, groupInterval: "year", "dataType": "date", "groupName": "OrderDate", "groupIndex": 0 },
                        { "dataField": "OrderDate", "groupInterval": "quarter", "dataType": "date", "groupName": "OrderDate", "groupIndex": 0 },
                        { "dataField": "OrderDate", "groupInterval": "month", "dataType": "date", "groupName": "OrderDate", "groupIndex": 0 },
                        { "dataField": "ShipCountry", "dataType": "string", "area": "row" },
                        { "dataField": "ShipCity", "dataType": "string", "area": "row" },
                        { "dataField": "ShipName", "dataType": "string", "area": "row" },
                        { "summaryType": "count", "caption": "Count", "area": "data" },
                        { "dataField": "Freight", "dataType": "number", summaryType: "avg", "caption": "Avg Freight", "format": "fixedPoint", "precision": 2, "area": "data" }
                    ],
                    "store": [{"OrderID":10248,"CustomerID":"VINET","EmployeeID":5,"OrderDate":"1996/07/04","RequiredDate":"1996/08/01","ShippedDate":"1996/07/16","ShipVia":3,"Freight":"32.3800","ShipName":"Vins et alcools Chevalier","ShipAddress":"59 rue de l'Abbaye","ShipCity":"Reims","ShipRegion":null,"ShipPostalCode":"51100","ShipCountry":"France"},{"OrderID":10249,"CustomerID":"TOMSP","EmployeeID":6,"OrderDate":"1996/07/05","RequiredDate":"1996/08/16","ShippedDate":"1996/07/10","ShipVia":1,"Freight":"11.6100","ShipName":"Toms Spezialitaten","ShipAddress":"Luisenstr. 48","ShipCity":"Munster","ShipRegion":null,"ShipPostalCode":"44087","ShipCountry":"Germany"},{"OrderID":10250,"CustomerID":"HANAR","EmployeeID":4,"OrderDate":"1996/07/08","RequiredDate":"1996/08/05","ShippedDate":"1996/07/12","ShipVia":2,"Freight":"65.8300","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10251,"CustomerID":"VICTE","EmployeeID":3,"OrderDate":"1996/07/08","RequiredDate":"1996/08/05","ShippedDate":"1996/07/15","ShipVia":1,"Freight":"41.3400","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10252,"CustomerID":"SUPRD","EmployeeID":4,"OrderDate":"1996/07/09","RequiredDate":"1996/08/06","ShippedDate":"1996/07/11","ShipVia":2,"Freight":"51.3000","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10253,"CustomerID":"HANAR","EmployeeID":3,"OrderDate":"1996/07/10","RequiredDate":"1996/07/24","ShippedDate":"1996/07/16","ShipVia":2,"Freight":"58.1700","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10254,"CustomerID":"CHOPS","EmployeeID":5,"OrderDate":"1996/07/11","RequiredDate":"1996/08/08","ShippedDate":"1996/07/23","ShipVia":2,"Freight":"22.9800","ShipName":"Chop-suey Chinese","ShipAddress":"Hauptstr. 31","ShipCity":"Bern","ShipRegion":null,"ShipPostalCode":"3012","ShipCountry":"Switzerland"},{"OrderID":10255,"CustomerID":"RICSU","EmployeeID":9,"OrderDate":"1996/07/12","RequiredDate":"1996/08/09","ShippedDate":"1996/07/15","ShipVia":3,"Freight":"148.3300","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":10256,"CustomerID":"WELLI","EmployeeID":3,"OrderDate":"1996/07/15","RequiredDate":"1996/08/12","ShippedDate":"1996/07/17","ShipVia":2,"Freight":"13.9700","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10257,"CustomerID":"HILAA","EmployeeID":4,"OrderDate":"1996/07/16","RequiredDate":"1996/08/13","ShippedDate":"1996/07/22","ShipVia":3,"Freight":"81.9100","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10258,"CustomerID":"ERNSH","EmployeeID":1,"OrderDate":"1996/07/17","RequiredDate":"1996/08/14","ShippedDate":"1996/07/23","ShipVia":1,"Freight":"140.5100","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10259,"CustomerID":"CENTC","EmployeeID":4,"OrderDate":"1996/07/18","RequiredDate":"1996/08/15","ShippedDate":"1996/07/25","ShipVia":3,"Freight":"3.2500","ShipName":"Centro comercial Moctezuma","ShipAddress":"Sierras de Granada 9993","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05022","ShipCountry":"Mexico"},{"OrderID":10260,"CustomerID":"OTTIK","EmployeeID":4,"OrderDate":"1996/07/19","RequiredDate":"1996/08/16","ShippedDate":"1996/07/29","ShipVia":1,"Freight":"55.0900","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":10261,"CustomerID":"QUEDE","EmployeeID":4,"OrderDate":"1996/07/19","RequiredDate":"1996/08/16","ShippedDate":"1996/07/30","ShipVia":2,"Freight":"3.0500","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10262,"CustomerID":"RATTC","EmployeeID":8,"OrderDate":"1996/07/22","RequiredDate":"1996/08/19","ShippedDate":"1996/07/25","ShipVia":3,"Freight":"48.2900","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10263,"CustomerID":"ERNSH","EmployeeID":9,"OrderDate":"1996/07/23","RequiredDate":"1996/08/20","ShippedDate":"1996/07/31","ShipVia":3,"Freight":"146.0600","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10264,"CustomerID":"FOLKO","EmployeeID":6,"OrderDate":"1996/07/24","RequiredDate":"1996/08/21","ShippedDate":"1996/08/23","ShipVia":3,"Freight":"3.6700","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10265,"CustomerID":"BLONP","EmployeeID":2,"OrderDate":"1996/07/25","RequiredDate":"1996/08/22","ShippedDate":"1996/08/12","ShipVia":1,"Freight":"55.2800","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10266,"CustomerID":"WARTH","EmployeeID":3,"OrderDate":"1996/07/26","RequiredDate":"1996/09/06","ShippedDate":"1996/07/31","ShipVia":3,"Freight":"25.7300","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10267,"CustomerID":"FRANK","EmployeeID":4,"OrderDate":"1996/07/29","RequiredDate":"1996/08/26","ShippedDate":"1996/08/06","ShipVia":1,"Freight":"208.5800","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10268,"CustomerID":"GROSR","EmployeeID":8,"OrderDate":"1996/07/30","RequiredDate":"1996/08/27","ShippedDate":"1996/08/02","ShipVia":3,"Freight":"66.2900","ShipName":"GROSELLA-Restaurante","ShipAddress":"5? Ave. Los Palos Grandes","ShipCity":"Caracas","ShipRegion":"DF","ShipPostalCode":"1081","ShipCountry":"Venezuela"},{"OrderID":10269,"CustomerID":"WHITC","EmployeeID":5,"OrderDate":"1996/07/31","RequiredDate":"1996/08/14","ShippedDate":"1996/08/09","ShipVia":1,"Freight":"4.5600","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10270,"CustomerID":"WARTH","EmployeeID":1,"OrderDate":"1996/08/01","RequiredDate":"1996/08/29","ShippedDate":"1996/08/02","ShipVia":1,"Freight":"136.5400","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10271,"CustomerID":"SPLIR","EmployeeID":6,"OrderDate":"1996/08/01","RequiredDate":"1996/08/29","ShippedDate":"1996/08/30","ShipVia":2,"Freight":"4.5400","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10272,"CustomerID":"RATTC","EmployeeID":6,"OrderDate":"1996/08/02","RequiredDate":"1996/08/30","ShippedDate":"1996/08/06","ShipVia":2,"Freight":"98.0300","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10273,"CustomerID":"QUICK","EmployeeID":3,"OrderDate":"1996/08/05","RequiredDate":"1996/09/02","ShippedDate":"1996/08/12","ShipVia":3,"Freight":"76.0700","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10274,"CustomerID":"VINET","EmployeeID":6,"OrderDate":"1996/08/06","RequiredDate":"1996/09/03","ShippedDate":"1996/08/16","ShipVia":1,"Freight":"6.0100","ShipName":"Vins et alcools Chevalier","ShipAddress":"59 rue de l'Abbaye","ShipCity":"Reims","ShipRegion":null,"ShipPostalCode":"51100","ShipCountry":"France"},{"OrderID":10275,"CustomerID":"MAGAA","EmployeeID":1,"OrderDate":"1996/08/07","RequiredDate":"1996/09/04","ShippedDate":"1996/08/09","ShipVia":1,"Freight":"26.9300","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10276,"CustomerID":"TORTU","EmployeeID":8,"OrderDate":"1996/08/08","RequiredDate":"1996/08/22","ShippedDate":"1996/08/14","ShipVia":3,"Freight":"13.8400","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10277,"CustomerID":"MORGK","EmployeeID":2,"OrderDate":"1996/08/09","RequiredDate":"1996/09/06","ShippedDate":"1996/08/13","ShipVia":3,"Freight":"125.7700","ShipName":"Morgenstern Gesundkost","ShipAddress":"Heerstr. 22","ShipCity":"Leipzig","ShipRegion":null,"ShipPostalCode":"04179","ShipCountry":"Germany"},{"OrderID":10278,"CustomerID":"BERGS","EmployeeID":8,"OrderDate":"1996/08/12","RequiredDate":"1996/09/09","ShippedDate":"1996/08/16","ShipVia":2,"Freight":"92.6900","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10279,"CustomerID":"LEHMS","EmployeeID":8,"OrderDate":"1996/08/13","RequiredDate":"1996/09/10","ShippedDate":"1996/08/16","ShipVia":2,"Freight":"25.8300","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10280,"CustomerID":"BERGS","EmployeeID":2,"OrderDate":"1996/08/14","RequiredDate":"1996/09/11","ShippedDate":"1996/09/12","ShipVia":1,"Freight":"8.9800","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10281,"CustomerID":"ROMEY","EmployeeID":4,"OrderDate":"1996/08/14","RequiredDate":"1996/08/28","ShippedDate":"1996/08/21","ShipVia":1,"Freight":"2.9400","ShipName":"Romero y tomillo","ShipAddress":"Gran Via, 1","ShipCity":"Madrid","ShipRegion":null,"ShipPostalCode":"28001","ShipCountry":"Spain"},{"OrderID":10282,"CustomerID":"ROMEY","EmployeeID":4,"OrderDate":"1996/08/15","RequiredDate":"1996/09/12","ShippedDate":"1996/08/21","ShipVia":1,"Freight":"12.6900","ShipName":"Romero y tomillo","ShipAddress":"Gran Via, 1","ShipCity":"Madrid","ShipRegion":null,"ShipPostalCode":"28001","ShipCountry":"Spain"},{"OrderID":10283,"CustomerID":"LILAS","EmployeeID":3,"OrderDate":"1996/08/16","RequiredDate":"1996/09/13","ShippedDate":"1996/08/23","ShipVia":3,"Freight":"84.8100","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10284,"CustomerID":"LEHMS","EmployeeID":4,"OrderDate":"1996/08/19","RequiredDate":"1996/09/16","ShippedDate":"1996/08/27","ShipVia":1,"Freight":"76.5600","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10285,"CustomerID":"QUICK","EmployeeID":1,"OrderDate":"1996/08/20","RequiredDate":"1996/09/17","ShippedDate":"1996/08/26","ShipVia":2,"Freight":"76.8300","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10286,"CustomerID":"QUICK","EmployeeID":8,"OrderDate":"1996/08/21","RequiredDate":"1996/09/18","ShippedDate":"1996/08/30","ShipVia":3,"Freight":"229.2400","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10287,"CustomerID":"RICAR","EmployeeID":8,"OrderDate":"1996/08/22","RequiredDate":"1996/09/19","ShippedDate":"1996/08/28","ShipVia":3,"Freight":"12.7600","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10288,"CustomerID":"REGGC","EmployeeID":4,"OrderDate":"1996/08/23","RequiredDate":"1996/09/20","ShippedDate":"1996/09/03","ShipVia":1,"Freight":"7.4500","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10289,"CustomerID":"BSBEV","EmployeeID":7,"OrderDate":"1996/08/26","RequiredDate":"1996/09/23","ShippedDate":"1996/08/28","ShipVia":3,"Freight":"22.7700","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10290,"CustomerID":"COMMI","EmployeeID":8,"OrderDate":"1996/08/27","RequiredDate":"1996/09/24","ShippedDate":"1996/09/03","ShipVia":1,"Freight":"79.7000","ShipName":"Comercio Mineiro","ShipAddress":"Av. dos Lusiadas, 23","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05432-043","ShipCountry":"Brazil"},{"OrderID":10291,"CustomerID":"QUEDE","EmployeeID":6,"OrderDate":"1996/08/27","RequiredDate":"1996/09/24","ShippedDate":"1996/09/04","ShipVia":2,"Freight":"6.4000","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10292,"CustomerID":"TRADH","EmployeeID":1,"OrderDate":"1996/08/28","RequiredDate":"1996/09/25","ShippedDate":"1996/09/02","ShipVia":2,"Freight":"1.3500","ShipName":"Tradicao Hipermercados","ShipAddress":"Av. Ines de Castro, 414","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05634-030","ShipCountry":"Brazil"},{"OrderID":10293,"CustomerID":"TORTU","EmployeeID":1,"OrderDate":"1996/08/29","RequiredDate":"1996/09/26","ShippedDate":"1996/09/11","ShipVia":3,"Freight":"21.1800","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10294,"CustomerID":"RATTC","EmployeeID":4,"OrderDate":"1996/08/30","RequiredDate":"1996/09/27","ShippedDate":"1996/09/05","ShipVia":2,"Freight":"147.2600","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10295,"CustomerID":"VINET","EmployeeID":2,"OrderDate":"1996/09/02","RequiredDate":"1996/09/30","ShippedDate":"1996/09/10","ShipVia":2,"Freight":"1.1500","ShipName":"Vins et alcools Chevalier","ShipAddress":"59 rue de l'Abbaye","ShipCity":"Reims","ShipRegion":null,"ShipPostalCode":"51100","ShipCountry":"France"},{"OrderID":10296,"CustomerID":"LILAS","EmployeeID":6,"OrderDate":"1996/09/03","RequiredDate":"1996/10/01","ShippedDate":"1996/09/11","ShipVia":1,"Freight":"0.1200","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10297,"CustomerID":"BLONP","EmployeeID":5,"OrderDate":"1996/09/04","RequiredDate":"1996/10/16","ShippedDate":"1996/09/10","ShipVia":2,"Freight":"5.7400","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10298,"CustomerID":"HUNGO","EmployeeID":6,"OrderDate":"1996/09/05","RequiredDate":"1996/10/03","ShippedDate":"1996/09/11","ShipVia":2,"Freight":"168.2200","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10299,"CustomerID":"RICAR","EmployeeID":4,"OrderDate":"1996/09/06","RequiredDate":"1996/10/04","ShippedDate":"1996/09/13","ShipVia":2,"Freight":"29.7600","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10300,"CustomerID":"MAGAA","EmployeeID":2,"OrderDate":"1996/09/09","RequiredDate":"1996/10/07","ShippedDate":"1996/09/18","ShipVia":2,"Freight":"17.6800","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10301,"CustomerID":"WANDK","EmployeeID":8,"OrderDate":"1996/09/09","RequiredDate":"1996/10/07","ShippedDate":"1996/09/17","ShipVia":2,"Freight":"45.0800","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10302,"CustomerID":"SUPRD","EmployeeID":4,"OrderDate":"1996/09/10","RequiredDate":"1996/10/08","ShippedDate":"1996/10/09","ShipVia":2,"Freight":"6.2700","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10303,"CustomerID":"GODOS","EmployeeID":7,"OrderDate":"1996/09/11","RequiredDate":"1996/10/09","ShippedDate":"1996/09/18","ShipVia":2,"Freight":"107.8300","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":10304,"CustomerID":"TORTU","EmployeeID":1,"OrderDate":"1996/09/12","RequiredDate":"1996/10/10","ShippedDate":"1996/09/17","ShipVia":2,"Freight":"63.7900","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10305,"CustomerID":"OLDWO","EmployeeID":8,"OrderDate":"1996/09/13","RequiredDate":"1996/10/11","ShippedDate":"1996/10/09","ShipVia":3,"Freight":"257.6200","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10306,"CustomerID":"ROMEY","EmployeeID":1,"OrderDate":"1996/09/16","RequiredDate":"1996/10/14","ShippedDate":"1996/09/23","ShipVia":3,"Freight":"7.5600","ShipName":"Romero y tomillo","ShipAddress":"Gran Via, 1","ShipCity":"Madrid","ShipRegion":null,"ShipPostalCode":"28001","ShipCountry":"Spain"},{"OrderID":10307,"CustomerID":"LONEP","EmployeeID":2,"OrderDate":"1996/09/17","RequiredDate":"1996/10/15","ShippedDate":"1996/09/25","ShipVia":2,"Freight":"0.5600","ShipName":"Lonesome Pine Restaurant","ShipAddress":"89 Chiaroscuro Rd.","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97219","ShipCountry":"USA"},{"OrderID":10308,"CustomerID":"ANATR","EmployeeID":7,"OrderDate":"1996/09/18","RequiredDate":"1996/10/16","ShippedDate":"1996/09/24","ShipVia":3,"Freight":"1.6100","ShipName":"Ana Trujillo Emparedados y helados","ShipAddress":"Avda. de la Constitucion 2222","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05021","ShipCountry":"Mexico"},{"OrderID":10309,"CustomerID":"HUNGO","EmployeeID":3,"OrderDate":"1996/09/19","RequiredDate":"1996/10/17","ShippedDate":"1996/10/23","ShipVia":1,"Freight":"47.3000","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10310,"CustomerID":"THEBI","EmployeeID":8,"OrderDate":"1996/09/20","RequiredDate":"1996/10/18","ShippedDate":"1996/09/27","ShipVia":2,"Freight":"17.5200","ShipName":"The Big Cheese","ShipAddress":"89 Jefferson Way Suite 2","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97201","ShipCountry":"USA"},{"OrderID":10311,"CustomerID":"DUMON","EmployeeID":1,"OrderDate":"1996/09/20","RequiredDate":"1996/10/04","ShippedDate":"1996/09/26","ShipVia":3,"Freight":"24.6900","ShipName":"Du monde entier","ShipAddress":"67, rue des Cinquante Otages","ShipCity":"Nantes","ShipRegion":null,"ShipPostalCode":"44000","ShipCountry":"France"},{"OrderID":10312,"CustomerID":"WANDK","EmployeeID":2,"OrderDate":"1996/09/23","RequiredDate":"1996/10/21","ShippedDate":"1996/10/03","ShipVia":2,"Freight":"40.2600","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10313,"CustomerID":"QUICK","EmployeeID":2,"OrderDate":"1996/09/24","RequiredDate":"1996/10/22","ShippedDate":"1996/10/04","ShipVia":2,"Freight":"1.9600","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10314,"CustomerID":"RATTC","EmployeeID":1,"OrderDate":"1996/09/25","RequiredDate":"1996/10/23","ShippedDate":"1996/10/04","ShipVia":2,"Freight":"74.1600","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10315,"CustomerID":"ISLAT","EmployeeID":4,"OrderDate":"1996/09/26","RequiredDate":"1996/10/24","ShippedDate":"1996/10/03","ShipVia":2,"Freight":"41.7600","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10316,"CustomerID":"RATTC","EmployeeID":1,"OrderDate":"1996/09/27","RequiredDate":"1996/10/25","ShippedDate":"1996/10/08","ShipVia":3,"Freight":"150.1500","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10317,"CustomerID":"LONEP","EmployeeID":6,"OrderDate":"1996/09/30","RequiredDate":"1996/10/28","ShippedDate":"1996/10/10","ShipVia":1,"Freight":"12.6900","ShipName":"Lonesome Pine Restaurant","ShipAddress":"89 Chiaroscuro Rd.","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97219","ShipCountry":"USA"},{"OrderID":10318,"CustomerID":"ISLAT","EmployeeID":8,"OrderDate":"1996/10/01","RequiredDate":"1996/10/29","ShippedDate":"1996/10/04","ShipVia":2,"Freight":"4.7300","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10319,"CustomerID":"TORTU","EmployeeID":7,"OrderDate":"1996/10/02","RequiredDate":"1996/10/30","ShippedDate":"1996/10/11","ShipVia":3,"Freight":"64.5000","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10320,"CustomerID":"WARTH","EmployeeID":5,"OrderDate":"1996/10/03","RequiredDate":"1996/10/17","ShippedDate":"1996/10/18","ShipVia":3,"Freight":"34.5700","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10321,"CustomerID":"ISLAT","EmployeeID":3,"OrderDate":"1996/10/03","RequiredDate":"1996/10/31","ShippedDate":"1996/10/11","ShipVia":2,"Freight":"3.4300","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10322,"CustomerID":"PERIC","EmployeeID":7,"OrderDate":"1996/10/04","RequiredDate":"1996/11/01","ShippedDate":"1996/10/23","ShipVia":3,"Freight":"0.4000","ShipName":"Pericles Comidas clasicas","ShipAddress":"Calle Dr. Jorge Cash 321","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10323,"CustomerID":"KOENE","EmployeeID":4,"OrderDate":"1996/10/07","RequiredDate":"1996/11/04","ShippedDate":"1996/10/14","ShipVia":1,"Freight":"4.8800","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10324,"CustomerID":"SAVEA","EmployeeID":9,"OrderDate":"1996/10/08","RequiredDate":"1996/11/05","ShippedDate":"1996/10/10","ShipVia":1,"Freight":"214.2700","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10325,"CustomerID":"KOENE","EmployeeID":1,"OrderDate":"1996/10/09","RequiredDate":"1996/10/23","ShippedDate":"1996/10/14","ShipVia":3,"Freight":"64.8600","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10326,"CustomerID":"BOLID","EmployeeID":4,"OrderDate":"1996/10/10","RequiredDate":"1996/11/07","ShippedDate":"1996/10/14","ShipVia":2,"Freight":"77.9200","ShipName":"Bolido Comidas preparadas","ShipAddress":"C/ Araquil, 67","ShipCity":"Madrid","ShipRegion":null,"ShipPostalCode":"28023","ShipCountry":"Spain"},{"OrderID":10327,"CustomerID":"FOLKO","EmployeeID":2,"OrderDate":"1996/10/11","RequiredDate":"1996/11/08","ShippedDate":"1996/10/14","ShipVia":1,"Freight":"63.3600","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10328,"CustomerID":"FURIB","EmployeeID":4,"OrderDate":"1996/10/14","RequiredDate":"1996/11/11","ShippedDate":"1996/10/17","ShipVia":3,"Freight":"87.0300","ShipName":"Furia Bacalhau e Frutos do Mar","ShipAddress":"Jardim das rosas n. 32","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1675","ShipCountry":"Portugal"},{"OrderID":10329,"CustomerID":"SPLIR","EmployeeID":4,"OrderDate":"1996/10/15","RequiredDate":"1996/11/26","ShippedDate":"1996/10/23","ShipVia":2,"Freight":"191.6700","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10330,"CustomerID":"LILAS","EmployeeID":3,"OrderDate":"1996/10/16","RequiredDate":"1996/11/13","ShippedDate":"1996/10/28","ShipVia":1,"Freight":"12.7500","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10331,"CustomerID":"BONAP","EmployeeID":9,"OrderDate":"1996/10/16","RequiredDate":"1996/11/27","ShippedDate":"1996/10/21","ShipVia":1,"Freight":"10.1900","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10332,"CustomerID":"MEREP","EmployeeID":3,"OrderDate":"1996/10/17","RequiredDate":"1996/11/28","ShippedDate":"1996/10/21","ShipVia":2,"Freight":"52.8400","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10333,"CustomerID":"WARTH","EmployeeID":5,"OrderDate":"1996/10/18","RequiredDate":"1996/11/15","ShippedDate":"1996/10/25","ShipVia":3,"Freight":"0.5900","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10334,"CustomerID":"VICTE","EmployeeID":8,"OrderDate":"1996/10/21","RequiredDate":"1996/11/18","ShippedDate":"1996/10/28","ShipVia":2,"Freight":"8.5600","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10335,"CustomerID":"HUNGO","EmployeeID":7,"OrderDate":"1996/10/22","RequiredDate":"1996/11/19","ShippedDate":"1996/10/24","ShipVia":2,"Freight":"42.1100","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10336,"CustomerID":"PRINI","EmployeeID":7,"OrderDate":"1996/10/23","RequiredDate":"1996/11/20","ShippedDate":"1996/10/25","ShipVia":2,"Freight":"15.5100","ShipName":"Princesa Isabel Vinhos","ShipAddress":"Estrada da saude n. 58","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1756","ShipCountry":"Portugal"},{"OrderID":10337,"CustomerID":"FRANK","EmployeeID":4,"OrderDate":"1996/10/24","RequiredDate":"1996/11/21","ShippedDate":"1996/10/29","ShipVia":3,"Freight":"108.2600","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10338,"CustomerID":"OLDWO","EmployeeID":4,"OrderDate":"1996/10/25","RequiredDate":"1996/11/22","ShippedDate":"1996/10/29","ShipVia":3,"Freight":"84.2100","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10339,"CustomerID":"MEREP","EmployeeID":2,"OrderDate":"1996/10/28","RequiredDate":"1996/11/25","ShippedDate":"1996/11/04","ShipVia":2,"Freight":"15.6600","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10340,"CustomerID":"BONAP","EmployeeID":1,"OrderDate":"1996/10/29","RequiredDate":"1996/11/26","ShippedDate":"1996/11/08","ShipVia":3,"Freight":"166.3100","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10341,"CustomerID":"SIMOB","EmployeeID":7,"OrderDate":"1996/10/29","RequiredDate":"1996/11/26","ShippedDate":"1996/11/05","ShipVia":3,"Freight":"26.7800","ShipName":"Simons bistro","ShipAddress":"Vinb?ltet 34","ShipCity":"Kobenhavn","ShipRegion":null,"ShipPostalCode":"1734","ShipCountry":"Denmark"},{"OrderID":10342,"CustomerID":"FRANK","EmployeeID":4,"OrderDate":"1996/10/30","RequiredDate":"1996/11/13","ShippedDate":"1996/11/04","ShipVia":2,"Freight":"54.8300","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10343,"CustomerID":"LEHMS","EmployeeID":4,"OrderDate":"1996/10/31","RequiredDate":"1996/11/28","ShippedDate":"1996/11/06","ShipVia":1,"Freight":"110.3700","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10344,"CustomerID":"WHITC","EmployeeID":4,"OrderDate":"1996/11/01","RequiredDate":"1996/11/29","ShippedDate":"1996/11/05","ShipVia":2,"Freight":"23.2900","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10345,"CustomerID":"QUICK","EmployeeID":2,"OrderDate":"1996/11/04","RequiredDate":"1996/12/02","ShippedDate":"1996/11/11","ShipVia":2,"Freight":"249.0600","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10346,"CustomerID":"RATTC","EmployeeID":3,"OrderDate":"1996/11/05","RequiredDate":"1996/12/17","ShippedDate":"1996/11/08","ShipVia":3,"Freight":"142.0800","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10347,"CustomerID":"FAMIA","EmployeeID":4,"OrderDate":"1996/11/06","RequiredDate":"1996/12/04","ShippedDate":"1996/11/08","ShipVia":3,"Freight":"3.1000","ShipName":"Familia Arquibaldo","ShipAddress":"Rua Oros, 92","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05442-030","ShipCountry":"Brazil"},{"OrderID":10348,"CustomerID":"WANDK","EmployeeID":4,"OrderDate":"1996/11/07","RequiredDate":"1996/12/05","ShippedDate":"1996/11/15","ShipVia":2,"Freight":"0.7800","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10349,"CustomerID":"SPLIR","EmployeeID":7,"OrderDate":"1996/11/08","RequiredDate":"1996/12/06","ShippedDate":"1996/11/15","ShipVia":1,"Freight":"8.6300","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10350,"CustomerID":"LAMAI","EmployeeID":6,"OrderDate":"1996/11/11","RequiredDate":"1996/12/09","ShippedDate":"1996/12/03","ShipVia":2,"Freight":"64.1900","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10351,"CustomerID":"ERNSH","EmployeeID":1,"OrderDate":"1996/11/11","RequiredDate":"1996/12/09","ShippedDate":"1996/11/20","ShipVia":1,"Freight":"162.3300","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10352,"CustomerID":"FURIB","EmployeeID":3,"OrderDate":"1996/11/12","RequiredDate":"1996/11/26","ShippedDate":"1996/11/18","ShipVia":3,"Freight":"1.3000","ShipName":"Furia Bacalhau e Frutos do Mar","ShipAddress":"Jardim das rosas n. 32","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1675","ShipCountry":"Portugal"},{"OrderID":10353,"CustomerID":"PICCO","EmployeeID":7,"OrderDate":"1996/11/13","RequiredDate":"1996/12/11","ShippedDate":"1996/11/25","ShipVia":3,"Freight":"360.6300","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10354,"CustomerID":"PERIC","EmployeeID":8,"OrderDate":"1996/11/14","RequiredDate":"1996/12/12","ShippedDate":"1996/11/20","ShipVia":3,"Freight":"53.8000","ShipName":"Pericles Comidas clasicas","ShipAddress":"Calle Dr. Jorge Cash 321","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10355,"CustomerID":"AROUT","EmployeeID":6,"OrderDate":"1996/11/15","RequiredDate":"1996/12/13","ShippedDate":"1996/11/20","ShipVia":1,"Freight":"41.9500","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10356,"CustomerID":"WANDK","EmployeeID":6,"OrderDate":"1996/11/18","RequiredDate":"1996/12/16","ShippedDate":"1996/11/27","ShipVia":2,"Freight":"36.7100","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10357,"CustomerID":"LILAS","EmployeeID":1,"OrderDate":"1996/11/19","RequiredDate":"1996/12/17","ShippedDate":"1996/12/02","ShipVia":3,"Freight":"34.8800","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10358,"CustomerID":"LAMAI","EmployeeID":5,"OrderDate":"1996/11/20","RequiredDate":"1996/12/18","ShippedDate":"1996/11/27","ShipVia":1,"Freight":"19.6400","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10359,"CustomerID":"SEVES","EmployeeID":5,"OrderDate":"1996/11/21","RequiredDate":"1996/12/19","ShippedDate":"1996/11/26","ShipVia":3,"Freight":"288.4300","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10360,"CustomerID":"BLONP","EmployeeID":4,"OrderDate":"1996/11/22","RequiredDate":"1996/12/20","ShippedDate":"1996/12/02","ShipVia":3,"Freight":"131.7000","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10361,"CustomerID":"QUICK","EmployeeID":1,"OrderDate":"1996/11/22","RequiredDate":"1996/12/20","ShippedDate":"1996/12/03","ShipVia":2,"Freight":"183.1700","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10362,"CustomerID":"BONAP","EmployeeID":3,"OrderDate":"1996/11/25","RequiredDate":"1996/12/23","ShippedDate":"1996/11/28","ShipVia":1,"Freight":"96.0400","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10363,"CustomerID":"DRACD","EmployeeID":4,"OrderDate":"1996/11/26","RequiredDate":"1996/12/24","ShippedDate":"1996/12/04","ShipVia":3,"Freight":"30.5400","ShipName":"Drachenblut Delikatessen","ShipAddress":"Walserweg 21","ShipCity":"Aachen","ShipRegion":null,"ShipPostalCode":"52066","ShipCountry":"Germany"},{"OrderID":10364,"CustomerID":"EASTC","EmployeeID":1,"OrderDate":"1996/11/26","RequiredDate":"1997/01/07","ShippedDate":"1996/12/04","ShipVia":1,"Freight":"71.9700","ShipName":"Eastern Connection","ShipAddress":"35 King George","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX3 6FW","ShipCountry":"UK"},{"OrderID":10365,"CustomerID":"ANTON","EmployeeID":3,"OrderDate":"1996/11/27","RequiredDate":"1996/12/25","ShippedDate":"1996/12/02","ShipVia":2,"Freight":"22.0000","ShipName":"Antonio Moreno Taqueria","ShipAddress":"Mataderos  2312","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05023","ShipCountry":"Mexico"},{"OrderID":10366,"CustomerID":"GALED","EmployeeID":8,"OrderDate":"1996/11/28","RequiredDate":"1997/01/09","ShippedDate":"1996/12/30","ShipVia":2,"Freight":"10.1400","ShipName":"Galeria del gastronomo","ShipAddress":"Rambla de Cataluna, 23","ShipCity":"Barcelona","ShipRegion":null,"ShipPostalCode":"8022","ShipCountry":"Spain"},{"OrderID":10367,"CustomerID":"VAFFE","EmployeeID":7,"OrderDate":"1996/11/28","RequiredDate":"1996/12/26","ShippedDate":"1996/12/02","ShipVia":3,"Freight":"13.5500","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10368,"CustomerID":"ERNSH","EmployeeID":2,"OrderDate":"1996/11/29","RequiredDate":"1996/12/27","ShippedDate":"1996/12/02","ShipVia":2,"Freight":"101.9500","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10369,"CustomerID":"SPLIR","EmployeeID":8,"OrderDate":"1996/12/02","RequiredDate":"1996/12/30","ShippedDate":"1996/12/09","ShipVia":2,"Freight":"195.6800","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10370,"CustomerID":"CHOPS","EmployeeID":6,"OrderDate":"1996/12/03","RequiredDate":"1996/12/31","ShippedDate":"1996/12/27","ShipVia":2,"Freight":"1.1700","ShipName":"Chop-suey Chinese","ShipAddress":"Hauptstr. 31","ShipCity":"Bern","ShipRegion":null,"ShipPostalCode":"3012","ShipCountry":"Switzerland"},{"OrderID":10371,"CustomerID":"LAMAI","EmployeeID":1,"OrderDate":"1996/12/03","RequiredDate":"1996/12/31","ShippedDate":"1996/12/24","ShipVia":1,"Freight":"0.4500","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10372,"CustomerID":"QUEEN","EmployeeID":5,"OrderDate":"1996/12/04","RequiredDate":"1997/01/01","ShippedDate":"1996/12/09","ShipVia":2,"Freight":"890.7800","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10373,"CustomerID":"HUNGO","EmployeeID":4,"OrderDate":"1996/12/05","RequiredDate":"1997/01/02","ShippedDate":"1996/12/11","ShipVia":3,"Freight":"124.1200","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10374,"CustomerID":"WOLZA","EmployeeID":1,"OrderDate":"1996/12/05","RequiredDate":"1997/01/02","ShippedDate":"1996/12/09","ShipVia":3,"Freight":"3.9400","ShipName":"Wolski Zajazd","ShipAddress":"ul. Filtrowa 68","ShipCity":"Warszawa","ShipRegion":null,"ShipPostalCode":"01-012","ShipCountry":"Poland"},{"OrderID":10375,"CustomerID":"HUNGC","EmployeeID":3,"OrderDate":"1996/12/06","RequiredDate":"1997/01/03","ShippedDate":"1996/12/09","ShipVia":2,"Freight":"20.1200","ShipName":"Hungry Coyote Import Store","ShipAddress":"City Center Plaza 516 Main St.","ShipCity":"Elgin","ShipRegion":"OR","ShipPostalCode":"97827","ShipCountry":"USA"},{"OrderID":10376,"CustomerID":"MEREP","EmployeeID":1,"OrderDate":"1996/12/09","RequiredDate":"1997/01/06","ShippedDate":"1996/12/13","ShipVia":2,"Freight":"20.3900","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10377,"CustomerID":"SEVES","EmployeeID":1,"OrderDate":"1996/12/09","RequiredDate":"1997/01/06","ShippedDate":"1996/12/13","ShipVia":3,"Freight":"22.2100","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10378,"CustomerID":"FOLKO","EmployeeID":5,"OrderDate":"1996/12/10","RequiredDate":"1997/01/07","ShippedDate":"1996/12/19","ShipVia":3,"Freight":"5.4400","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10379,"CustomerID":"QUEDE","EmployeeID":2,"OrderDate":"1996/12/11","RequiredDate":"1997/01/08","ShippedDate":"1996/12/13","ShipVia":1,"Freight":"45.0300","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10380,"CustomerID":"HUNGO","EmployeeID":8,"OrderDate":"1996/12/12","RequiredDate":"1997/01/09","ShippedDate":"1997/01/16","ShipVia":3,"Freight":"35.0300","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10381,"CustomerID":"LILAS","EmployeeID":3,"OrderDate":"1996/12/12","RequiredDate":"1997/01/09","ShippedDate":"1996/12/13","ShipVia":3,"Freight":"7.9900","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10382,"CustomerID":"ERNSH","EmployeeID":4,"OrderDate":"1996/12/13","RequiredDate":"1997/01/10","ShippedDate":"1996/12/16","ShipVia":1,"Freight":"94.7700","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10383,"CustomerID":"AROUT","EmployeeID":8,"OrderDate":"1996/12/16","RequiredDate":"1997/01/13","ShippedDate":"1996/12/18","ShipVia":3,"Freight":"34.2400","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10384,"CustomerID":"BERGS","EmployeeID":3,"OrderDate":"1996/12/16","RequiredDate":"1997/01/13","ShippedDate":"1996/12/20","ShipVia":3,"Freight":"168.6400","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10385,"CustomerID":"SPLIR","EmployeeID":1,"OrderDate":"1996/12/17","RequiredDate":"1997/01/14","ShippedDate":"1996/12/23","ShipVia":2,"Freight":"30.9600","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10386,"CustomerID":"FAMIA","EmployeeID":9,"OrderDate":"1996/12/18","RequiredDate":"1997/01/01","ShippedDate":"1996/12/25","ShipVia":3,"Freight":"13.9900","ShipName":"Familia Arquibaldo","ShipAddress":"Rua Oros, 92","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05442-030","ShipCountry":"Brazil"},{"OrderID":10387,"CustomerID":"SANTG","EmployeeID":1,"OrderDate":"1996/12/18","RequiredDate":"1997/01/15","ShippedDate":"1996/12/20","ShipVia":2,"Freight":"93.6300","ShipName":"Sante Gourmet","ShipAddress":"Erling Skakkes gate 78","ShipCity":"Stavern","ShipRegion":null,"ShipPostalCode":"4110","ShipCountry":"Norway"},{"OrderID":10388,"CustomerID":"SEVES","EmployeeID":2,"OrderDate":"1996/12/19","RequiredDate":"1997/01/16","ShippedDate":"1996/12/20","ShipVia":1,"Freight":"34.8600","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10389,"CustomerID":"BOTTM","EmployeeID":4,"OrderDate":"1996/12/20","RequiredDate":"1997/01/17","ShippedDate":"1996/12/24","ShipVia":2,"Freight":"47.4200","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10390,"CustomerID":"ERNSH","EmployeeID":6,"OrderDate":"1996/12/23","RequiredDate":"1997/01/20","ShippedDate":"1996/12/26","ShipVia":1,"Freight":"126.3800","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10391,"CustomerID":"DRACD","EmployeeID":3,"OrderDate":"1996/12/23","RequiredDate":"1997/01/20","ShippedDate":"1996/12/31","ShipVia":3,"Freight":"5.4500","ShipName":"Drachenblut Delikatessen","ShipAddress":"Walserweg 21","ShipCity":"Aachen","ShipRegion":null,"ShipPostalCode":"52066","ShipCountry":"Germany"},{"OrderID":10392,"CustomerID":"PICCO","EmployeeID":2,"OrderDate":"1996/12/24","RequiredDate":"1997/01/21","ShippedDate":"1997/01/01","ShipVia":3,"Freight":"122.4600","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10393,"CustomerID":"SAVEA","EmployeeID":1,"OrderDate":"1996/12/25","RequiredDate":"1997/01/22","ShippedDate":"1997/01/03","ShipVia":3,"Freight":"126.5600","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10394,"CustomerID":"HUNGC","EmployeeID":1,"OrderDate":"1996/12/25","RequiredDate":"1997/01/22","ShippedDate":"1997/01/03","ShipVia":3,"Freight":"30.3400","ShipName":"Hungry Coyote Import Store","ShipAddress":"City Center Plaza 516 Main St.","ShipCity":"Elgin","ShipRegion":"OR","ShipPostalCode":"97827","ShipCountry":"USA"},{"OrderID":10395,"CustomerID":"HILAA","EmployeeID":6,"OrderDate":"1996/12/26","RequiredDate":"1997/01/23","ShippedDate":"1997/01/03","ShipVia":1,"Freight":"184.4100","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10396,"CustomerID":"FRANK","EmployeeID":1,"OrderDate":"1996/12/27","RequiredDate":"1997/01/10","ShippedDate":"1997/01/06","ShipVia":3,"Freight":"135.3500","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10397,"CustomerID":"PRINI","EmployeeID":5,"OrderDate":"1996/12/27","RequiredDate":"1997/01/24","ShippedDate":"1997/01/02","ShipVia":1,"Freight":"60.2600","ShipName":"Princesa Isabel Vinhos","ShipAddress":"Estrada da saude n. 58","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1756","ShipCountry":"Portugal"},{"OrderID":10398,"CustomerID":"SAVEA","EmployeeID":2,"OrderDate":"1996/12/30","RequiredDate":"1997/01/27","ShippedDate":"1997/01/09","ShipVia":3,"Freight":"89.1600","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10399,"CustomerID":"VAFFE","EmployeeID":8,"OrderDate":"1996/12/31","RequiredDate":"1997/01/14","ShippedDate":"1997/01/08","ShipVia":3,"Freight":"27.3600","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10400,"CustomerID":"EASTC","EmployeeID":1,"OrderDate":"1997/01/01","RequiredDate":"1997/01/29","ShippedDate":"1997/01/16","ShipVia":3,"Freight":"83.9300","ShipName":"Eastern Connection","ShipAddress":"35 King George","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX3 6FW","ShipCountry":"UK"},{"OrderID":10401,"CustomerID":"RATTC","EmployeeID":1,"OrderDate":"1997/01/01","RequiredDate":"1997/01/29","ShippedDate":"1997/01/10","ShipVia":1,"Freight":"12.5100","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10402,"CustomerID":"ERNSH","EmployeeID":8,"OrderDate":"1997/01/02","RequiredDate":"1997/02/13","ShippedDate":"1997/01/10","ShipVia":2,"Freight":"67.8800","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10403,"CustomerID":"ERNSH","EmployeeID":4,"OrderDate":"1997/01/03","RequiredDate":"1997/01/31","ShippedDate":"1997/01/09","ShipVia":3,"Freight":"73.7900","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10404,"CustomerID":"MAGAA","EmployeeID":2,"OrderDate":"1997/01/03","RequiredDate":"1997/01/31","ShippedDate":"1997/01/08","ShipVia":1,"Freight":"155.9700","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10405,"CustomerID":"LINOD","EmployeeID":1,"OrderDate":"1997/01/06","RequiredDate":"1997/02/03","ShippedDate":"1997/01/22","ShipVia":1,"Freight":"34.8200","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10406,"CustomerID":"QUEEN","EmployeeID":7,"OrderDate":"1997/01/07","RequiredDate":"1997/02/18","ShippedDate":"1997/01/13","ShipVia":1,"Freight":"108.0400","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10407,"CustomerID":"OTTIK","EmployeeID":2,"OrderDate":"1997/01/07","RequiredDate":"1997/02/04","ShippedDate":"1997/01/30","ShipVia":2,"Freight":"91.4800","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":10408,"CustomerID":"FOLIG","EmployeeID":8,"OrderDate":"1997/01/08","RequiredDate":"1997/02/05","ShippedDate":"1997/01/14","ShipVia":1,"Freight":"11.2600","ShipName":"Folies gourmandes","ShipAddress":"184, chaussee de Tournai","ShipCity":"Lille","ShipRegion":null,"ShipPostalCode":"59000","ShipCountry":"France"},{"OrderID":10409,"CustomerID":"OCEAN","EmployeeID":3,"OrderDate":"1997/01/09","RequiredDate":"1997/02/06","ShippedDate":"1997/01/14","ShipVia":1,"Freight":"29.8300","ShipName":"Oceano Atlantico Ltda.","ShipAddress":"Ing. Gustavo Moncada 8585 Piso 20-A","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10410,"CustomerID":"BOTTM","EmployeeID":3,"OrderDate":"1997/01/10","RequiredDate":"1997/02/07","ShippedDate":"1997/01/15","ShipVia":3,"Freight":"2.4000","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10411,"CustomerID":"BOTTM","EmployeeID":9,"OrderDate":"1997/01/10","RequiredDate":"1997/02/07","ShippedDate":"1997/01/21","ShipVia":3,"Freight":"23.6500","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10412,"CustomerID":"WARTH","EmployeeID":8,"OrderDate":"1997/01/13","RequiredDate":"1997/02/10","ShippedDate":"1997/01/15","ShipVia":2,"Freight":"3.7700","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10413,"CustomerID":"LAMAI","EmployeeID":3,"OrderDate":"1997/01/14","RequiredDate":"1997/02/11","ShippedDate":"1997/01/16","ShipVia":2,"Freight":"95.6600","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10414,"CustomerID":"FAMIA","EmployeeID":2,"OrderDate":"1997/01/14","RequiredDate":"1997/02/11","ShippedDate":"1997/01/17","ShipVia":3,"Freight":"21.4800","ShipName":"Familia Arquibaldo","ShipAddress":"Rua Oros, 92","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05442-030","ShipCountry":"Brazil"},{"OrderID":10415,"CustomerID":"HUNGC","EmployeeID":3,"OrderDate":"1997/01/15","RequiredDate":"1997/02/12","ShippedDate":"1997/01/24","ShipVia":1,"Freight":"0.2000","ShipName":"Hungry Coyote Import Store","ShipAddress":"City Center Plaza 516 Main St.","ShipCity":"Elgin","ShipRegion":"OR","ShipPostalCode":"97827","ShipCountry":"USA"},{"OrderID":10416,"CustomerID":"WARTH","EmployeeID":8,"OrderDate":"1997/01/16","RequiredDate":"1997/02/13","ShippedDate":"1997/01/27","ShipVia":3,"Freight":"22.7200","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10417,"CustomerID":"SIMOB","EmployeeID":4,"OrderDate":"1997/01/16","RequiredDate":"1997/02/13","ShippedDate":"1997/01/28","ShipVia":3,"Freight":"70.2900","ShipName":"Simons bistro","ShipAddress":"Vinb?ltet 34","ShipCity":"Kobenhavn","ShipRegion":null,"ShipPostalCode":"1734","ShipCountry":"Denmark"},{"OrderID":10418,"CustomerID":"QUICK","EmployeeID":4,"OrderDate":"1997/01/17","RequiredDate":"1997/02/14","ShippedDate":"1997/01/24","ShipVia":1,"Freight":"17.5500","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10419,"CustomerID":"RICSU","EmployeeID":4,"OrderDate":"1997/01/20","RequiredDate":"1997/02/17","ShippedDate":"1997/01/30","ShipVia":2,"Freight":"137.3500","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":10420,"CustomerID":"WELLI","EmployeeID":3,"OrderDate":"1997/01/21","RequiredDate":"1997/02/18","ShippedDate":"1997/01/27","ShipVia":1,"Freight":"44.1200","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10421,"CustomerID":"QUEDE","EmployeeID":8,"OrderDate":"1997/01/21","RequiredDate":"1997/03/04","ShippedDate":"1997/01/27","ShipVia":1,"Freight":"99.2300","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10422,"CustomerID":"FRANS","EmployeeID":2,"OrderDate":"1997/01/22","RequiredDate":"1997/02/19","ShippedDate":"1997/01/31","ShipVia":1,"Freight":"3.0200","ShipName":"Franchi S.p.A.","ShipAddress":"Via Monte Bianco 34","ShipCity":"Torino","ShipRegion":null,"ShipPostalCode":"10100","ShipCountry":"Italy"},{"OrderID":10423,"CustomerID":"GOURL","EmployeeID":6,"OrderDate":"1997/01/23","RequiredDate":"1997/02/06","ShippedDate":"1997/02/24","ShipVia":3,"Freight":"24.5000","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":10424,"CustomerID":"MEREP","EmployeeID":7,"OrderDate":"1997/01/23","RequiredDate":"1997/02/20","ShippedDate":"1997/01/27","ShipVia":2,"Freight":"370.6100","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10425,"CustomerID":"LAMAI","EmployeeID":6,"OrderDate":"1997/01/24","RequiredDate":"1997/02/21","ShippedDate":"1997/02/14","ShipVia":2,"Freight":"7.9300","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10426,"CustomerID":"GALED","EmployeeID":4,"OrderDate":"1997/01/27","RequiredDate":"1997/02/24","ShippedDate":"1997/02/06","ShipVia":1,"Freight":"18.6900","ShipName":"Galeria del gastronomo","ShipAddress":"Rambla de Cataluna, 23","ShipCity":"Barcelona","ShipRegion":null,"ShipPostalCode":"8022","ShipCountry":"Spain"},{"OrderID":10427,"CustomerID":"PICCO","EmployeeID":4,"OrderDate":"1997/01/27","RequiredDate":"1997/02/24","ShippedDate":"1997/03/03","ShipVia":2,"Freight":"31.2900","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10428,"CustomerID":"REGGC","EmployeeID":7,"OrderDate":"1997/01/28","RequiredDate":"1997/02/25","ShippedDate":"1997/02/04","ShipVia":1,"Freight":"11.0900","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10429,"CustomerID":"HUNGO","EmployeeID":3,"OrderDate":"1997/01/29","RequiredDate":"1997/03/12","ShippedDate":"1997/02/07","ShipVia":2,"Freight":"56.6300","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10430,"CustomerID":"ERNSH","EmployeeID":4,"OrderDate":"1997/01/30","RequiredDate":"1997/02/13","ShippedDate":"1997/02/03","ShipVia":1,"Freight":"458.7800","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10431,"CustomerID":"BOTTM","EmployeeID":4,"OrderDate":"1997/01/30","RequiredDate":"1997/02/13","ShippedDate":"1997/02/07","ShipVia":2,"Freight":"44.1700","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10432,"CustomerID":"SPLIR","EmployeeID":3,"OrderDate":"1997/01/31","RequiredDate":"1997/02/14","ShippedDate":"1997/02/07","ShipVia":2,"Freight":"4.3400","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10433,"CustomerID":"PRINI","EmployeeID":3,"OrderDate":"1997/02/03","RequiredDate":"1997/03/03","ShippedDate":"1997/03/04","ShipVia":3,"Freight":"73.8300","ShipName":"Princesa Isabel Vinhos","ShipAddress":"Estrada da saude n. 58","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1756","ShipCountry":"Portugal"},{"OrderID":10434,"CustomerID":"FOLKO","EmployeeID":3,"OrderDate":"1997/02/03","RequiredDate":"1997/03/03","ShippedDate":"1997/02/13","ShipVia":2,"Freight":"17.9200","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10435,"CustomerID":"CONSH","EmployeeID":8,"OrderDate":"1997/02/04","RequiredDate":"1997/03/18","ShippedDate":"1997/02/07","ShipVia":2,"Freight":"9.2100","ShipName":"Consolidated Holdings","ShipAddress":"Berkeley Gardens 12  Brewery","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX1 6LT","ShipCountry":"UK"},{"OrderID":10436,"CustomerID":"BLONP","EmployeeID":3,"OrderDate":"1997/02/05","RequiredDate":"1997/03/05","ShippedDate":"1997/02/11","ShipVia":2,"Freight":"156.6600","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10437,"CustomerID":"WARTH","EmployeeID":8,"OrderDate":"1997/02/05","RequiredDate":"1997/03/05","ShippedDate":"1997/02/12","ShipVia":1,"Freight":"19.9700","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10438,"CustomerID":"TOMSP","EmployeeID":3,"OrderDate":"1997/02/06","RequiredDate":"1997/03/06","ShippedDate":"1997/02/14","ShipVia":2,"Freight":"8.2400","ShipName":"Toms Spezialitaten","ShipAddress":"Luisenstr. 48","ShipCity":"Munster","ShipRegion":null,"ShipPostalCode":"44087","ShipCountry":"Germany"},{"OrderID":10439,"CustomerID":"MEREP","EmployeeID":6,"OrderDate":"1997/02/07","RequiredDate":"1997/03/07","ShippedDate":"1997/02/10","ShipVia":3,"Freight":"4.0700","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10440,"CustomerID":"SAVEA","EmployeeID":4,"OrderDate":"1997/02/10","RequiredDate":"1997/03/10","ShippedDate":"1997/02/28","ShipVia":2,"Freight":"86.5300","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10441,"CustomerID":"OLDWO","EmployeeID":3,"OrderDate":"1997/02/10","RequiredDate":"1997/03/24","ShippedDate":"1997/03/14","ShipVia":2,"Freight":"73.0200","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10442,"CustomerID":"ERNSH","EmployeeID":3,"OrderDate":"1997/02/11","RequiredDate":"1997/03/11","ShippedDate":"1997/02/18","ShipVia":2,"Freight":"47.9400","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10443,"CustomerID":"REGGC","EmployeeID":8,"OrderDate":"1997/02/12","RequiredDate":"1997/03/12","ShippedDate":"1997/02/14","ShipVia":1,"Freight":"13.9500","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10444,"CustomerID":"BERGS","EmployeeID":3,"OrderDate":"1997/02/12","RequiredDate":"1997/03/12","ShippedDate":"1997/02/21","ShipVia":3,"Freight":"3.5000","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10445,"CustomerID":"BERGS","EmployeeID":3,"OrderDate":"1997/02/13","RequiredDate":"1997/03/13","ShippedDate":"1997/02/20","ShipVia":1,"Freight":"9.3000","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10446,"CustomerID":"TOMSP","EmployeeID":6,"OrderDate":"1997/02/14","RequiredDate":"1997/03/14","ShippedDate":"1997/02/19","ShipVia":1,"Freight":"14.6800","ShipName":"Toms Spezialitaten","ShipAddress":"Luisenstr. 48","ShipCity":"Munster","ShipRegion":null,"ShipPostalCode":"44087","ShipCountry":"Germany"},{"OrderID":10447,"CustomerID":"RICAR","EmployeeID":4,"OrderDate":"1997/02/14","RequiredDate":"1997/03/14","ShippedDate":"1997/03/07","ShipVia":2,"Freight":"68.6600","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10448,"CustomerID":"RANCH","EmployeeID":4,"OrderDate":"1997/02/17","RequiredDate":"1997/03/17","ShippedDate":"1997/02/24","ShipVia":2,"Freight":"38.8200","ShipName":"Rancho grande","ShipAddress":"Av. del Libertador 900","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10449,"CustomerID":"BLONP","EmployeeID":3,"OrderDate":"1997/02/18","RequiredDate":"1997/03/18","ShippedDate":"1997/02/27","ShipVia":2,"Freight":"53.3000","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10450,"CustomerID":"VICTE","EmployeeID":8,"OrderDate":"1997/02/19","RequiredDate":"1997/03/19","ShippedDate":"1997/03/11","ShipVia":2,"Freight":"7.2300","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10451,"CustomerID":"QUICK","EmployeeID":4,"OrderDate":"1997/02/19","RequiredDate":"1997/03/05","ShippedDate":"1997/03/12","ShipVia":3,"Freight":"189.0900","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10452,"CustomerID":"SAVEA","EmployeeID":8,"OrderDate":"1997/02/20","RequiredDate":"1997/03/20","ShippedDate":"1997/02/26","ShipVia":1,"Freight":"140.2600","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10453,"CustomerID":"AROUT","EmployeeID":1,"OrderDate":"1997/02/21","RequiredDate":"1997/03/21","ShippedDate":"1997/02/26","ShipVia":2,"Freight":"25.3600","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10454,"CustomerID":"LAMAI","EmployeeID":4,"OrderDate":"1997/02/21","RequiredDate":"1997/03/21","ShippedDate":"1997/02/25","ShipVia":3,"Freight":"2.7400","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10455,"CustomerID":"WARTH","EmployeeID":8,"OrderDate":"1997/02/24","RequiredDate":"1997/04/07","ShippedDate":"1997/03/03","ShipVia":2,"Freight":"180.4500","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10456,"CustomerID":"KOENE","EmployeeID":8,"OrderDate":"1997/02/25","RequiredDate":"1997/04/08","ShippedDate":"1997/02/28","ShipVia":2,"Freight":"8.1200","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10457,"CustomerID":"KOENE","EmployeeID":2,"OrderDate":"1997/02/25","RequiredDate":"1997/03/25","ShippedDate":"1997/03/03","ShipVia":1,"Freight":"11.5700","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10458,"CustomerID":"SUPRD","EmployeeID":7,"OrderDate":"1997/02/26","RequiredDate":"1997/03/26","ShippedDate":"1997/03/04","ShipVia":3,"Freight":"147.0600","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10459,"CustomerID":"VICTE","EmployeeID":4,"OrderDate":"1997/02/27","RequiredDate":"1997/03/27","ShippedDate":"1997/02/28","ShipVia":2,"Freight":"25.0900","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10460,"CustomerID":"FOLKO","EmployeeID":8,"OrderDate":"1997/02/28","RequiredDate":"1997/03/28","ShippedDate":"1997/03/03","ShipVia":1,"Freight":"16.2700","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10461,"CustomerID":"LILAS","EmployeeID":1,"OrderDate":"1997/02/28","RequiredDate":"1997/03/28","ShippedDate":"1997/03/05","ShipVia":3,"Freight":"148.6100","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10462,"CustomerID":"CONSH","EmployeeID":2,"OrderDate":"1997/03/03","RequiredDate":"1997/03/31","ShippedDate":"1997/03/18","ShipVia":1,"Freight":"6.1700","ShipName":"Consolidated Holdings","ShipAddress":"Berkeley Gardens 12  Brewery","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX1 6LT","ShipCountry":"UK"},{"OrderID":10463,"CustomerID":"SUPRD","EmployeeID":5,"OrderDate":"1997/03/04","RequiredDate":"1997/04/01","ShippedDate":"1997/03/06","ShipVia":3,"Freight":"14.7800","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10464,"CustomerID":"FURIB","EmployeeID":4,"OrderDate":"1997/03/04","RequiredDate":"1997/04/01","ShippedDate":"1997/03/14","ShipVia":2,"Freight":"89.0000","ShipName":"Furia Bacalhau e Frutos do Mar","ShipAddress":"Jardim das rosas n. 32","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1675","ShipCountry":"Portugal"},{"OrderID":10465,"CustomerID":"VAFFE","EmployeeID":1,"OrderDate":"1997/03/05","RequiredDate":"1997/04/02","ShippedDate":"1997/03/14","ShipVia":3,"Freight":"145.0400","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10466,"CustomerID":"COMMI","EmployeeID":4,"OrderDate":"1997/03/06","RequiredDate":"1997/04/03","ShippedDate":"1997/03/13","ShipVia":1,"Freight":"11.9300","ShipName":"Comercio Mineiro","ShipAddress":"Av. dos Lusiadas, 23","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05432-043","ShipCountry":"Brazil"},{"OrderID":10467,"CustomerID":"MAGAA","EmployeeID":8,"OrderDate":"1997/03/06","RequiredDate":"1997/04/03","ShippedDate":"1997/03/11","ShipVia":2,"Freight":"4.9300","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10468,"CustomerID":"KOENE","EmployeeID":3,"OrderDate":"1997/03/07","RequiredDate":"1997/04/04","ShippedDate":"1997/03/12","ShipVia":3,"Freight":"44.1200","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10469,"CustomerID":"WHITC","EmployeeID":1,"OrderDate":"1997/03/10","RequiredDate":"1997/04/07","ShippedDate":"1997/03/14","ShipVia":1,"Freight":"60.1800","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10470,"CustomerID":"BONAP","EmployeeID":4,"OrderDate":"1997/03/11","RequiredDate":"1997/04/08","ShippedDate":"1997/03/14","ShipVia":2,"Freight":"64.5600","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10471,"CustomerID":"BSBEV","EmployeeID":2,"OrderDate":"1997/03/11","RequiredDate":"1997/04/08","ShippedDate":"1997/03/18","ShipVia":3,"Freight":"45.5900","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10472,"CustomerID":"SEVES","EmployeeID":8,"OrderDate":"1997/03/12","RequiredDate":"1997/04/09","ShippedDate":"1997/03/19","ShipVia":1,"Freight":"4.2000","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10473,"CustomerID":"ISLAT","EmployeeID":1,"OrderDate":"1997/03/13","RequiredDate":"1997/03/27","ShippedDate":"1997/03/21","ShipVia":3,"Freight":"16.3700","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10474,"CustomerID":"PERIC","EmployeeID":5,"OrderDate":"1997/03/13","RequiredDate":"1997/04/10","ShippedDate":"1997/03/21","ShipVia":2,"Freight":"83.4900","ShipName":"Pericles Comidas clasicas","ShipAddress":"Calle Dr. Jorge Cash 321","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10475,"CustomerID":"SUPRD","EmployeeID":9,"OrderDate":"1997/03/14","RequiredDate":"1997/04/11","ShippedDate":"1997/04/04","ShipVia":1,"Freight":"68.5200","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10476,"CustomerID":"HILAA","EmployeeID":8,"OrderDate":"1997/03/17","RequiredDate":"1997/04/14","ShippedDate":"1997/03/24","ShipVia":3,"Freight":"4.4100","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10477,"CustomerID":"PRINI","EmployeeID":5,"OrderDate":"1997/03/17","RequiredDate":"1997/04/14","ShippedDate":"1997/03/25","ShipVia":2,"Freight":"13.0200","ShipName":"Princesa Isabel Vinhos","ShipAddress":"Estrada da saude n. 58","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1756","ShipCountry":"Portugal"},{"OrderID":10478,"CustomerID":"VICTE","EmployeeID":2,"OrderDate":"1997/03/18","RequiredDate":"1997/04/01","ShippedDate":"1997/03/26","ShipVia":3,"Freight":"4.8100","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10479,"CustomerID":"RATTC","EmployeeID":3,"OrderDate":"1997/03/19","RequiredDate":"1997/04/16","ShippedDate":"1997/03/21","ShipVia":3,"Freight":"708.9500","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10480,"CustomerID":"FOLIG","EmployeeID":6,"OrderDate":"1997/03/20","RequiredDate":"1997/04/17","ShippedDate":"1997/03/24","ShipVia":2,"Freight":"1.3500","ShipName":"Folies gourmandes","ShipAddress":"184, chaussee de Tournai","ShipCity":"Lille","ShipRegion":null,"ShipPostalCode":"59000","ShipCountry":"France"},{"OrderID":10481,"CustomerID":"RICAR","EmployeeID":8,"OrderDate":"1997/03/20","RequiredDate":"1997/04/17","ShippedDate":"1997/03/25","ShipVia":2,"Freight":"64.3300","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10482,"CustomerID":"LAZYK","EmployeeID":1,"OrderDate":"1997/03/21","RequiredDate":"1997/04/18","ShippedDate":"1997/04/10","ShipVia":3,"Freight":"7.4800","ShipName":"Lazy K Kountry Store","ShipAddress":"12 Orchestra Terrace","ShipCity":"Walla Walla","ShipRegion":"WA","ShipPostalCode":"99362","ShipCountry":"USA"},{"OrderID":10483,"CustomerID":"WHITC","EmployeeID":7,"OrderDate":"1997/03/24","RequiredDate":"1997/04/21","ShippedDate":"1997/04/25","ShipVia":2,"Freight":"15.2800","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10484,"CustomerID":"BSBEV","EmployeeID":3,"OrderDate":"1997/03/24","RequiredDate":"1997/04/21","ShippedDate":"1997/04/01","ShipVia":3,"Freight":"6.8800","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10485,"CustomerID":"LINOD","EmployeeID":4,"OrderDate":"1997/03/25","RequiredDate":"1997/04/08","ShippedDate":"1997/03/31","ShipVia":2,"Freight":"64.4500","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10486,"CustomerID":"HILAA","EmployeeID":1,"OrderDate":"1997/03/26","RequiredDate":"1997/04/23","ShippedDate":"1997/04/02","ShipVia":2,"Freight":"30.5300","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10487,"CustomerID":"QUEEN","EmployeeID":2,"OrderDate":"1997/03/26","RequiredDate":"1997/04/23","ShippedDate":"1997/03/28","ShipVia":2,"Freight":"71.0700","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10488,"CustomerID":"FRANK","EmployeeID":8,"OrderDate":"1997/03/27","RequiredDate":"1997/04/24","ShippedDate":"1997/04/02","ShipVia":2,"Freight":"4.9300","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10489,"CustomerID":"PICCO","EmployeeID":6,"OrderDate":"1997/03/28","RequiredDate":"1997/04/25","ShippedDate":"1997/04/09","ShipVia":2,"Freight":"5.2900","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10490,"CustomerID":"HILAA","EmployeeID":7,"OrderDate":"1997/03/31","RequiredDate":"1997/04/28","ShippedDate":"1997/04/03","ShipVia":2,"Freight":"210.1900","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10491,"CustomerID":"FURIB","EmployeeID":8,"OrderDate":"1997/03/31","RequiredDate":"1997/04/28","ShippedDate":"1997/04/08","ShipVia":3,"Freight":"16.9600","ShipName":"Furia Bacalhau e Frutos do Mar","ShipAddress":"Jardim das rosas n. 32","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1675","ShipCountry":"Portugal"},{"OrderID":10492,"CustomerID":"BOTTM","EmployeeID":3,"OrderDate":"1997/04/01","RequiredDate":"1997/04/29","ShippedDate":"1997/04/11","ShipVia":1,"Freight":"62.8900","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10493,"CustomerID":"LAMAI","EmployeeID":4,"OrderDate":"1997/04/02","RequiredDate":"1997/04/30","ShippedDate":"1997/04/10","ShipVia":3,"Freight":"10.6400","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10494,"CustomerID":"COMMI","EmployeeID":4,"OrderDate":"1997/04/02","RequiredDate":"1997/04/30","ShippedDate":"1997/04/09","ShipVia":2,"Freight":"65.9900","ShipName":"Comercio Mineiro","ShipAddress":"Av. dos Lusiadas, 23","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05432-043","ShipCountry":"Brazil"},{"OrderID":10495,"CustomerID":"LAUGB","EmployeeID":3,"OrderDate":"1997/04/03","RequiredDate":"1997/05/01","ShippedDate":"1997/04/11","ShipVia":3,"Freight":"4.6500","ShipName":"Laughing Bacchus Wine Cellars","ShipAddress":"2319 Elm St.","ShipCity":"Vancouver","ShipRegion":"BC","ShipPostalCode":"V3F 2K1","ShipCountry":"Canada"},{"OrderID":10496,"CustomerID":"TRADH","EmployeeID":7,"OrderDate":"1997/04/04","RequiredDate":"1997/05/02","ShippedDate":"1997/04/07","ShipVia":2,"Freight":"46.7700","ShipName":"Tradicao Hipermercados","ShipAddress":"Av. Ines de Castro, 414","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05634-030","ShipCountry":"Brazil"},{"OrderID":10497,"CustomerID":"LEHMS","EmployeeID":7,"OrderDate":"1997/04/04","RequiredDate":"1997/05/02","ShippedDate":"1997/04/07","ShipVia":1,"Freight":"36.2100","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10498,"CustomerID":"HILAA","EmployeeID":8,"OrderDate":"1997/04/07","RequiredDate":"1997/05/05","ShippedDate":"1997/04/11","ShipVia":2,"Freight":"29.7500","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10499,"CustomerID":"LILAS","EmployeeID":4,"OrderDate":"1997/04/08","RequiredDate":"1997/05/06","ShippedDate":"1997/04/16","ShipVia":2,"Freight":"102.0200","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10500,"CustomerID":"LAMAI","EmployeeID":6,"OrderDate":"1997/04/09","RequiredDate":"1997/05/07","ShippedDate":"1997/04/17","ShipVia":1,"Freight":"42.6800","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10501,"CustomerID":"BLAUS","EmployeeID":9,"OrderDate":"1997/04/09","RequiredDate":"1997/05/07","ShippedDate":"1997/04/16","ShipVia":3,"Freight":"8.8500","ShipName":"Blauer See Delikatessen","ShipAddress":"Forsterstr. 57","ShipCity":"Mannheim","ShipRegion":null,"ShipPostalCode":"68306","ShipCountry":"Germany"},{"OrderID":10502,"CustomerID":"PERIC","EmployeeID":2,"OrderDate":"1997/04/10","RequiredDate":"1997/05/08","ShippedDate":"1997/04/29","ShipVia":1,"Freight":"69.3200","ShipName":"Pericles Comidas clasicas","ShipAddress":"Calle Dr. Jorge Cash 321","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10503,"CustomerID":"HUNGO","EmployeeID":6,"OrderDate":"1997/04/11","RequiredDate":"1997/05/09","ShippedDate":"1997/04/16","ShipVia":2,"Freight":"16.7400","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10504,"CustomerID":"WHITC","EmployeeID":4,"OrderDate":"1997/04/11","RequiredDate":"1997/05/09","ShippedDate":"1997/04/18","ShipVia":3,"Freight":"59.1300","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10505,"CustomerID":"MEREP","EmployeeID":3,"OrderDate":"1997/04/14","RequiredDate":"1997/05/12","ShippedDate":"1997/04/21","ShipVia":3,"Freight":"7.1300","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10506,"CustomerID":"KOENE","EmployeeID":9,"OrderDate":"1997/04/15","RequiredDate":"1997/05/13","ShippedDate":"1997/05/02","ShipVia":2,"Freight":"21.1900","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10507,"CustomerID":"ANTON","EmployeeID":7,"OrderDate":"1997/04/15","RequiredDate":"1997/05/13","ShippedDate":"1997/04/22","ShipVia":1,"Freight":"47.4500","ShipName":"Antonio Moreno Taqueria","ShipAddress":"Mataderos  2312","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05023","ShipCountry":"Mexico"},{"OrderID":10508,"CustomerID":"OTTIK","EmployeeID":1,"OrderDate":"1997/04/16","RequiredDate":"1997/05/14","ShippedDate":"1997/05/13","ShipVia":2,"Freight":"4.9900","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":10509,"CustomerID":"BLAUS","EmployeeID":4,"OrderDate":"1997/04/17","RequiredDate":"1997/05/15","ShippedDate":"1997/04/29","ShipVia":1,"Freight":"0.1500","ShipName":"Blauer See Delikatessen","ShipAddress":"Forsterstr. 57","ShipCity":"Mannheim","ShipRegion":null,"ShipPostalCode":"68306","ShipCountry":"Germany"},{"OrderID":10510,"CustomerID":"SAVEA","EmployeeID":6,"OrderDate":"1997/04/18","RequiredDate":"1997/05/16","ShippedDate":"1997/04/28","ShipVia":3,"Freight":"367.6300","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10511,"CustomerID":"BONAP","EmployeeID":4,"OrderDate":"1997/04/18","RequiredDate":"1997/05/16","ShippedDate":"1997/04/21","ShipVia":3,"Freight":"350.6400","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10512,"CustomerID":"FAMIA","EmployeeID":7,"OrderDate":"1997/04/21","RequiredDate":"1997/05/19","ShippedDate":"1997/04/24","ShipVia":2,"Freight":"3.5300","ShipName":"Familia Arquibaldo","ShipAddress":"Rua Oros, 92","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05442-030","ShipCountry":"Brazil"},{"OrderID":10513,"CustomerID":"WANDK","EmployeeID":7,"OrderDate":"1997/04/22","RequiredDate":"1997/06/03","ShippedDate":"1997/04/28","ShipVia":1,"Freight":"105.6500","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10514,"CustomerID":"ERNSH","EmployeeID":3,"OrderDate":"1997/04/22","RequiredDate":"1997/05/20","ShippedDate":"1997/05/16","ShipVia":2,"Freight":"789.9500","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10515,"CustomerID":"QUICK","EmployeeID":2,"OrderDate":"1997/04/23","RequiredDate":"1997/05/07","ShippedDate":"1997/05/23","ShipVia":1,"Freight":"204.4700","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10516,"CustomerID":"HUNGO","EmployeeID":2,"OrderDate":"1997/04/24","RequiredDate":"1997/05/22","ShippedDate":"1997/05/01","ShipVia":3,"Freight":"62.7800","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10517,"CustomerID":"NORTS","EmployeeID":3,"OrderDate":"1997/04/24","RequiredDate":"1997/05/22","ShippedDate":"1997/04/29","ShipVia":3,"Freight":"32.0700","ShipName":"North/South","ShipAddress":"South House 300 Queensbridge","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"SW7 1RZ","ShipCountry":"UK"},{"OrderID":10518,"CustomerID":"TORTU","EmployeeID":4,"OrderDate":"1997/04/25","RequiredDate":"1997/05/09","ShippedDate":"1997/05/05","ShipVia":2,"Freight":"218.1500","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10519,"CustomerID":"CHOPS","EmployeeID":6,"OrderDate":"1997/04/28","RequiredDate":"1997/05/26","ShippedDate":"1997/05/01","ShipVia":3,"Freight":"91.7600","ShipName":"Chop-suey Chinese","ShipAddress":"Hauptstr. 31","ShipCity":"Bern","ShipRegion":null,"ShipPostalCode":"3012","ShipCountry":"Switzerland"},{"OrderID":10520,"CustomerID":"SANTG","EmployeeID":7,"OrderDate":"1997/04/29","RequiredDate":"1997/05/27","ShippedDate":"1997/05/01","ShipVia":1,"Freight":"13.3700","ShipName":"Sante Gourmet","ShipAddress":"Erling Skakkes gate 78","ShipCity":"Stavern","ShipRegion":null,"ShipPostalCode":"4110","ShipCountry":"Norway"},{"OrderID":10521,"CustomerID":"CACTU","EmployeeID":8,"OrderDate":"1997/04/29","RequiredDate":"1997/05/27","ShippedDate":"1997/05/02","ShipVia":2,"Freight":"17.2200","ShipName":"Cactus Comidas para llevar","ShipAddress":"Cerrito 333","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10522,"CustomerID":"LEHMS","EmployeeID":4,"OrderDate":"1997/04/30","RequiredDate":"1997/05/28","ShippedDate":"1997/05/06","ShipVia":1,"Freight":"45.3300","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10523,"CustomerID":"SEVES","EmployeeID":7,"OrderDate":"1997/05/01","RequiredDate":"1997/05/29","ShippedDate":"1997/05/30","ShipVia":2,"Freight":"77.6300","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10524,"CustomerID":"BERGS","EmployeeID":1,"OrderDate":"1997/05/01","RequiredDate":"1997/05/29","ShippedDate":"1997/05/07","ShipVia":2,"Freight":"244.7900","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10525,"CustomerID":"BONAP","EmployeeID":1,"OrderDate":"1997/05/02","RequiredDate":"1997/05/30","ShippedDate":"1997/05/23","ShipVia":2,"Freight":"11.0600","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10526,"CustomerID":"WARTH","EmployeeID":4,"OrderDate":"1997/05/05","RequiredDate":"1997/06/02","ShippedDate":"1997/05/15","ShipVia":2,"Freight":"58.5900","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10527,"CustomerID":"QUICK","EmployeeID":7,"OrderDate":"1997/05/05","RequiredDate":"1997/06/02","ShippedDate":"1997/05/07","ShipVia":1,"Freight":"41.9000","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10528,"CustomerID":"GREAL","EmployeeID":6,"OrderDate":"1997/05/06","RequiredDate":"1997/05/20","ShippedDate":"1997/05/09","ShipVia":2,"Freight":"3.3500","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":10529,"CustomerID":"MAISD","EmployeeID":5,"OrderDate":"1997/05/07","RequiredDate":"1997/06/04","ShippedDate":"1997/05/09","ShipVia":2,"Freight":"66.6900","ShipName":"Maison Dewey","ShipAddress":"Rue Joseph-Bens 532","ShipCity":"Bruxelles","ShipRegion":null,"ShipPostalCode":"B-1180","ShipCountry":"Belgium"},{"OrderID":10530,"CustomerID":"PICCO","EmployeeID":3,"OrderDate":"1997/05/08","RequiredDate":"1997/06/05","ShippedDate":"1997/05/12","ShipVia":2,"Freight":"339.2200","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10531,"CustomerID":"OCEAN","EmployeeID":7,"OrderDate":"1997/05/08","RequiredDate":"1997/06/05","ShippedDate":"1997/05/19","ShipVia":1,"Freight":"8.1200","ShipName":"Oceano Atlantico Ltda.","ShipAddress":"Ing. Gustavo Moncada 8585 Piso 20-A","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10532,"CustomerID":"EASTC","EmployeeID":7,"OrderDate":"1997/05/09","RequiredDate":"1997/06/06","ShippedDate":"1997/05/12","ShipVia":3,"Freight":"74.4600","ShipName":"Eastern Connection","ShipAddress":"35 King George","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX3 6FW","ShipCountry":"UK"},{"OrderID":10533,"CustomerID":"FOLKO","EmployeeID":8,"OrderDate":"1997/05/12","RequiredDate":"1997/06/09","ShippedDate":"1997/05/22","ShipVia":1,"Freight":"188.0400","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10534,"CustomerID":"LEHMS","EmployeeID":8,"OrderDate":"1997/05/12","RequiredDate":"1997/06/09","ShippedDate":"1997/05/14","ShipVia":2,"Freight":"27.9400","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10535,"CustomerID":"ANTON","EmployeeID":4,"OrderDate":"1997/05/13","RequiredDate":"1997/06/10","ShippedDate":"1997/05/21","ShipVia":1,"Freight":"15.6400","ShipName":"Antonio Moreno Taqueria","ShipAddress":"Mataderos  2312","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05023","ShipCountry":"Mexico"},{"OrderID":10536,"CustomerID":"LEHMS","EmployeeID":3,"OrderDate":"1997/05/14","RequiredDate":"1997/06/11","ShippedDate":"1997/06/06","ShipVia":2,"Freight":"58.8800","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10537,"CustomerID":"RICSU","EmployeeID":1,"OrderDate":"1997/05/14","RequiredDate":"1997/05/28","ShippedDate":"1997/05/19","ShipVia":1,"Freight":"78.8500","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":10538,"CustomerID":"BSBEV","EmployeeID":9,"OrderDate":"1997/05/15","RequiredDate":"1997/06/12","ShippedDate":"1997/05/16","ShipVia":3,"Freight":"4.8700","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10539,"CustomerID":"BSBEV","EmployeeID":6,"OrderDate":"1997/05/16","RequiredDate":"1997/06/13","ShippedDate":"1997/05/23","ShipVia":3,"Freight":"12.3600","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10540,"CustomerID":"QUICK","EmployeeID":3,"OrderDate":"1997/05/19","RequiredDate":"1997/06/16","ShippedDate":"1997/06/13","ShipVia":3,"Freight":"1007.6400","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10541,"CustomerID":"HANAR","EmployeeID":2,"OrderDate":"1997/05/19","RequiredDate":"1997/06/16","ShippedDate":"1997/05/29","ShipVia":1,"Freight":"68.6500","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10542,"CustomerID":"KOENE","EmployeeID":1,"OrderDate":"1997/05/20","RequiredDate":"1997/06/17","ShippedDate":"1997/05/26","ShipVia":3,"Freight":"10.9500","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10543,"CustomerID":"LILAS","EmployeeID":8,"OrderDate":"1997/05/21","RequiredDate":"1997/06/18","ShippedDate":"1997/05/23","ShipVia":2,"Freight":"48.1700","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10544,"CustomerID":"LONEP","EmployeeID":4,"OrderDate":"1997/05/21","RequiredDate":"1997/06/18","ShippedDate":"1997/05/30","ShipVia":1,"Freight":"24.9100","ShipName":"Lonesome Pine Restaurant","ShipAddress":"89 Chiaroscuro Rd.","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97219","ShipCountry":"USA"},{"OrderID":10545,"CustomerID":"LAZYK","EmployeeID":8,"OrderDate":"1997/05/22","RequiredDate":"1997/06/19","ShippedDate":"1997/06/26","ShipVia":2,"Freight":"11.9200","ShipName":"Lazy K Kountry Store","ShipAddress":"12 Orchestra Terrace","ShipCity":"Walla Walla","ShipRegion":"WA","ShipPostalCode":"99362","ShipCountry":"USA"},{"OrderID":10546,"CustomerID":"VICTE","EmployeeID":1,"OrderDate":"1997/05/23","RequiredDate":"1997/06/20","ShippedDate":"1997/05/27","ShipVia":3,"Freight":"194.7200","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10547,"CustomerID":"SEVES","EmployeeID":3,"OrderDate":"1997/05/23","RequiredDate":"1997/06/20","ShippedDate":"1997/06/02","ShipVia":2,"Freight":"178.4300","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10548,"CustomerID":"TOMSP","EmployeeID":3,"OrderDate":"1997/05/26","RequiredDate":"1997/06/23","ShippedDate":"1997/06/02","ShipVia":2,"Freight":"1.4300","ShipName":"Toms Spezialitaten","ShipAddress":"Luisenstr. 48","ShipCity":"Munster","ShipRegion":null,"ShipPostalCode":"44087","ShipCountry":"Germany"},{"OrderID":10549,"CustomerID":"QUICK","EmployeeID":5,"OrderDate":"1997/05/27","RequiredDate":"1997/06/10","ShippedDate":"1997/05/30","ShipVia":1,"Freight":"171.2400","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10550,"CustomerID":"GODOS","EmployeeID":7,"OrderDate":"1997/05/28","RequiredDate":"1997/06/25","ShippedDate":"1997/06/06","ShipVia":3,"Freight":"4.3200","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":10551,"CustomerID":"FURIB","EmployeeID":4,"OrderDate":"1997/05/28","RequiredDate":"1997/07/09","ShippedDate":"1997/06/06","ShipVia":3,"Freight":"72.9500","ShipName":"Furia Bacalhau e Frutos do Mar","ShipAddress":"Jardim das rosas n. 32","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1675","ShipCountry":"Portugal"},{"OrderID":10552,"CustomerID":"HILAA","EmployeeID":2,"OrderDate":"1997/05/29","RequiredDate":"1997/06/26","ShippedDate":"1997/06/05","ShipVia":1,"Freight":"83.2200","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10553,"CustomerID":"WARTH","EmployeeID":2,"OrderDate":"1997/05/30","RequiredDate":"1997/06/27","ShippedDate":"1997/06/03","ShipVia":2,"Freight":"149.4900","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10554,"CustomerID":"OTTIK","EmployeeID":4,"OrderDate":"1997/05/30","RequiredDate":"1997/06/27","ShippedDate":"1997/06/05","ShipVia":3,"Freight":"120.9700","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":10555,"CustomerID":"SAVEA","EmployeeID":6,"OrderDate":"1997/06/02","RequiredDate":"1997/06/30","ShippedDate":"1997/06/04","ShipVia":3,"Freight":"252.4900","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10556,"CustomerID":"SIMOB","EmployeeID":2,"OrderDate":"1997/06/03","RequiredDate":"1997/07/15","ShippedDate":"1997/06/13","ShipVia":1,"Freight":"9.8000","ShipName":"Simons bistro","ShipAddress":"Vinb?ltet 34","ShipCity":"Kobenhavn","ShipRegion":null,"ShipPostalCode":"1734","ShipCountry":"Denmark"},{"OrderID":10557,"CustomerID":"LEHMS","EmployeeID":9,"OrderDate":"1997/06/03","RequiredDate":"1997/06/17","ShippedDate":"1997/06/06","ShipVia":2,"Freight":"96.7200","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10558,"CustomerID":"AROUT","EmployeeID":1,"OrderDate":"1997/06/04","RequiredDate":"1997/07/02","ShippedDate":"1997/06/10","ShipVia":2,"Freight":"72.9700","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10559,"CustomerID":"BLONP","EmployeeID":6,"OrderDate":"1997/06/05","RequiredDate":"1997/07/03","ShippedDate":"1997/06/13","ShipVia":1,"Freight":"8.0500","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10560,"CustomerID":"FRANK","EmployeeID":8,"OrderDate":"1997/06/06","RequiredDate":"1997/07/04","ShippedDate":"1997/06/09","ShipVia":1,"Freight":"36.6500","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10561,"CustomerID":"FOLKO","EmployeeID":2,"OrderDate":"1997/06/06","RequiredDate":"1997/07/04","ShippedDate":"1997/06/09","ShipVia":2,"Freight":"242.2100","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10562,"CustomerID":"REGGC","EmployeeID":1,"OrderDate":"1997/06/09","RequiredDate":"1997/07/07","ShippedDate":"1997/06/12","ShipVia":1,"Freight":"22.9500","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10563,"CustomerID":"RICAR","EmployeeID":2,"OrderDate":"1997/06/10","RequiredDate":"1997/07/22","ShippedDate":"1997/06/24","ShipVia":2,"Freight":"60.4300","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10564,"CustomerID":"RATTC","EmployeeID":4,"OrderDate":"1997/06/10","RequiredDate":"1997/07/08","ShippedDate":"1997/06/16","ShipVia":3,"Freight":"13.7500","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10565,"CustomerID":"MEREP","EmployeeID":8,"OrderDate":"1997/06/11","RequiredDate":"1997/07/09","ShippedDate":"1997/06/18","ShipVia":2,"Freight":"7.1500","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10566,"CustomerID":"BLONP","EmployeeID":9,"OrderDate":"1997/06/12","RequiredDate":"1997/07/10","ShippedDate":"1997/06/18","ShipVia":1,"Freight":"88.4000","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10567,"CustomerID":"HUNGO","EmployeeID":1,"OrderDate":"1997/06/12","RequiredDate":"1997/07/10","ShippedDate":"1997/06/17","ShipVia":1,"Freight":"33.9700","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10568,"CustomerID":"GALED","EmployeeID":3,"OrderDate":"1997/06/13","RequiredDate":"1997/07/11","ShippedDate":"1997/07/09","ShipVia":3,"Freight":"6.5400","ShipName":"Galeria del gastronomo","ShipAddress":"Rambla de Cataluna, 23","ShipCity":"Barcelona","ShipRegion":null,"ShipPostalCode":"8022","ShipCountry":"Spain"},{"OrderID":10569,"CustomerID":"RATTC","EmployeeID":5,"OrderDate":"1997/06/16","RequiredDate":"1997/07/14","ShippedDate":"1997/07/11","ShipVia":1,"Freight":"58.9800","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10570,"CustomerID":"MEREP","EmployeeID":3,"OrderDate":"1997/06/17","RequiredDate":"1997/07/15","ShippedDate":"1997/06/19","ShipVia":3,"Freight":"188.9900","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10571,"CustomerID":"ERNSH","EmployeeID":8,"OrderDate":"1997/06/17","RequiredDate":"1997/07/29","ShippedDate":"1997/07/04","ShipVia":3,"Freight":"26.0600","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10572,"CustomerID":"BERGS","EmployeeID":3,"OrderDate":"1997/06/18","RequiredDate":"1997/07/16","ShippedDate":"1997/06/25","ShipVia":2,"Freight":"116.4300","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10573,"CustomerID":"ANTON","EmployeeID":7,"OrderDate":"1997/06/19","RequiredDate":"1997/07/17","ShippedDate":"1997/06/20","ShipVia":3,"Freight":"84.8400","ShipName":"Antonio Moreno Taqueria","ShipAddress":"Mataderos  2312","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05023","ShipCountry":"Mexico"},{"OrderID":10574,"CustomerID":"TRAIH","EmployeeID":4,"OrderDate":"1997/06/19","RequiredDate":"1997/07/17","ShippedDate":"1997/06/30","ShipVia":2,"Freight":"37.6000","ShipName":"Trail's Head Gourmet Provisioners","ShipAddress":"722 DaVinci Blvd.","ShipCity":"Kirkland","ShipRegion":"WA","ShipPostalCode":"98034","ShipCountry":"USA"},{"OrderID":10575,"CustomerID":"MORGK","EmployeeID":5,"OrderDate":"1997/06/20","RequiredDate":"1997/07/04","ShippedDate":"1997/06/30","ShipVia":1,"Freight":"127.3400","ShipName":"Morgenstern Gesundkost","ShipAddress":"Heerstr. 22","ShipCity":"Leipzig","ShipRegion":null,"ShipPostalCode":"04179","ShipCountry":"Germany"},{"OrderID":10576,"CustomerID":"TORTU","EmployeeID":3,"OrderDate":"1997/06/23","RequiredDate":"1997/07/07","ShippedDate":"1997/06/30","ShipVia":3,"Freight":"18.5600","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10577,"CustomerID":"TRAIH","EmployeeID":9,"OrderDate":"1997/06/23","RequiredDate":"1997/08/04","ShippedDate":"1997/06/30","ShipVia":2,"Freight":"25.4100","ShipName":"Trail's Head Gourmet Provisioners","ShipAddress":"722 DaVinci Blvd.","ShipCity":"Kirkland","ShipRegion":"WA","ShipPostalCode":"98034","ShipCountry":"USA"},{"OrderID":10578,"CustomerID":"BSBEV","EmployeeID":4,"OrderDate":"1997/06/24","RequiredDate":"1997/07/22","ShippedDate":"1997/07/25","ShipVia":3,"Freight":"29.6000","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10579,"CustomerID":"LETSS","EmployeeID":1,"OrderDate":"1997/06/25","RequiredDate":"1997/07/23","ShippedDate":"1997/07/04","ShipVia":2,"Freight":"13.7300","ShipName":"Let's Stop N Shop","ShipAddress":"87 Polk St. Suite 5","ShipCity":"San Francisco","ShipRegion":"CA","ShipPostalCode":"94117","ShipCountry":"USA"},{"OrderID":10580,"CustomerID":"OTTIK","EmployeeID":4,"OrderDate":"1997/06/26","RequiredDate":"1997/07/24","ShippedDate":"1997/07/01","ShipVia":3,"Freight":"75.8900","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":10581,"CustomerID":"FAMIA","EmployeeID":3,"OrderDate":"1997/06/26","RequiredDate":"1997/07/24","ShippedDate":"1997/07/02","ShipVia":1,"Freight":"3.0100","ShipName":"Familia Arquibaldo","ShipAddress":"Rua Oros, 92","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05442-030","ShipCountry":"Brazil"},{"OrderID":10582,"CustomerID":"BLAUS","EmployeeID":3,"OrderDate":"1997/06/27","RequiredDate":"1997/07/25","ShippedDate":"1997/07/14","ShipVia":2,"Freight":"27.7100","ShipName":"Blauer See Delikatessen","ShipAddress":"Forsterstr. 57","ShipCity":"Mannheim","ShipRegion":null,"ShipPostalCode":"68306","ShipCountry":"Germany"},{"OrderID":10583,"CustomerID":"WARTH","EmployeeID":2,"OrderDate":"1997/06/30","RequiredDate":"1997/07/28","ShippedDate":"1997/07/04","ShipVia":2,"Freight":"7.2800","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10584,"CustomerID":"BLONP","EmployeeID":4,"OrderDate":"1997/06/30","RequiredDate":"1997/07/28","ShippedDate":"1997/07/04","ShipVia":1,"Freight":"59.1400","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10585,"CustomerID":"WELLI","EmployeeID":7,"OrderDate":"1997/07/01","RequiredDate":"1997/07/29","ShippedDate":"1997/07/10","ShipVia":1,"Freight":"13.4100","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10586,"CustomerID":"REGGC","EmployeeID":9,"OrderDate":"1997/07/02","RequiredDate":"1997/07/30","ShippedDate":"1997/07/09","ShipVia":1,"Freight":"0.4800","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10587,"CustomerID":"QUEDE","EmployeeID":1,"OrderDate":"1997/07/02","RequiredDate":"1997/07/30","ShippedDate":"1997/07/09","ShipVia":1,"Freight":"62.5200","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10588,"CustomerID":"QUICK","EmployeeID":2,"OrderDate":"1997/07/03","RequiredDate":"1997/07/31","ShippedDate":"1997/07/10","ShipVia":3,"Freight":"194.6700","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10589,"CustomerID":"GREAL","EmployeeID":8,"OrderDate":"1997/07/04","RequiredDate":"1997/08/01","ShippedDate":"1997/07/14","ShipVia":2,"Freight":"4.4200","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":10590,"CustomerID":"MEREP","EmployeeID":4,"OrderDate":"1997/07/07","RequiredDate":"1997/08/04","ShippedDate":"1997/07/14","ShipVia":3,"Freight":"44.7700","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10591,"CustomerID":"VAFFE","EmployeeID":1,"OrderDate":"1997/07/07","RequiredDate":"1997/07/21","ShippedDate":"1997/07/16","ShipVia":1,"Freight":"55.9200","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10592,"CustomerID":"LEHMS","EmployeeID":3,"OrderDate":"1997/07/08","RequiredDate":"1997/08/05","ShippedDate":"1997/07/16","ShipVia":1,"Freight":"32.1000","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10593,"CustomerID":"LEHMS","EmployeeID":7,"OrderDate":"1997/07/09","RequiredDate":"1997/08/06","ShippedDate":"1997/08/13","ShipVia":2,"Freight":"174.2000","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10594,"CustomerID":"OLDWO","EmployeeID":3,"OrderDate":"1997/07/09","RequiredDate":"1997/08/06","ShippedDate":"1997/07/16","ShipVia":2,"Freight":"5.2400","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10595,"CustomerID":"ERNSH","EmployeeID":2,"OrderDate":"1997/07/10","RequiredDate":"1997/08/07","ShippedDate":"1997/07/14","ShipVia":1,"Freight":"96.7800","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10596,"CustomerID":"WHITC","EmployeeID":8,"OrderDate":"1997/07/11","RequiredDate":"1997/08/08","ShippedDate":"1997/08/12","ShipVia":1,"Freight":"16.3400","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10597,"CustomerID":"PICCO","EmployeeID":7,"OrderDate":"1997/07/11","RequiredDate":"1997/08/08","ShippedDate":"1997/07/18","ShipVia":3,"Freight":"35.1200","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10598,"CustomerID":"RATTC","EmployeeID":1,"OrderDate":"1997/07/14","RequiredDate":"1997/08/11","ShippedDate":"1997/07/18","ShipVia":3,"Freight":"44.4200","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10599,"CustomerID":"BSBEV","EmployeeID":6,"OrderDate":"1997/07/15","RequiredDate":"1997/08/26","ShippedDate":"1997/07/21","ShipVia":3,"Freight":"29.9800","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10600,"CustomerID":"HUNGC","EmployeeID":4,"OrderDate":"1997/07/16","RequiredDate":"1997/08/13","ShippedDate":"1997/07/21","ShipVia":1,"Freight":"45.1300","ShipName":"Hungry Coyote Import Store","ShipAddress":"City Center Plaza 516 Main St.","ShipCity":"Elgin","ShipRegion":"OR","ShipPostalCode":"97827","ShipCountry":"USA"},{"OrderID":10601,"CustomerID":"HILAA","EmployeeID":7,"OrderDate":"1997/07/16","RequiredDate":"1997/08/27","ShippedDate":"1997/07/22","ShipVia":1,"Freight":"58.3000","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10602,"CustomerID":"VAFFE","EmployeeID":8,"OrderDate":"1997/07/17","RequiredDate":"1997/08/14","ShippedDate":"1997/07/22","ShipVia":2,"Freight":"2.9200","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10603,"CustomerID":"SAVEA","EmployeeID":8,"OrderDate":"1997/07/18","RequiredDate":"1997/08/15","ShippedDate":"1997/08/08","ShipVia":2,"Freight":"48.7700","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10604,"CustomerID":"FURIB","EmployeeID":1,"OrderDate":"1997/07/18","RequiredDate":"1997/08/15","ShippedDate":"1997/07/29","ShipVia":1,"Freight":"7.4600","ShipName":"Furia Bacalhau e Frutos do Mar","ShipAddress":"Jardim das rosas n. 32","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1675","ShipCountry":"Portugal"},{"OrderID":10605,"CustomerID":"MEREP","EmployeeID":1,"OrderDate":"1997/07/21","RequiredDate":"1997/08/18","ShippedDate":"1997/07/29","ShipVia":2,"Freight":"379.1300","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10606,"CustomerID":"TRADH","EmployeeID":4,"OrderDate":"1997/07/22","RequiredDate":"1997/08/19","ShippedDate":"1997/07/31","ShipVia":3,"Freight":"79.4000","ShipName":"Tradicao Hipermercados","ShipAddress":"Av. Ines de Castro, 414","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05634-030","ShipCountry":"Brazil"},{"OrderID":10607,"CustomerID":"SAVEA","EmployeeID":5,"OrderDate":"1997/07/22","RequiredDate":"1997/08/19","ShippedDate":"1997/07/25","ShipVia":1,"Freight":"200.2400","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10608,"CustomerID":"TOMSP","EmployeeID":4,"OrderDate":"1997/07/23","RequiredDate":"1997/08/20","ShippedDate":"1997/08/01","ShipVia":2,"Freight":"27.7900","ShipName":"Toms Spezialitaten","ShipAddress":"Luisenstr. 48","ShipCity":"Munster","ShipRegion":null,"ShipPostalCode":"44087","ShipCountry":"Germany"},{"OrderID":10609,"CustomerID":"DUMON","EmployeeID":7,"OrderDate":"1997/07/24","RequiredDate":"1997/08/21","ShippedDate":"1997/07/30","ShipVia":2,"Freight":"1.8500","ShipName":"Du monde entier","ShipAddress":"67, rue des Cinquante Otages","ShipCity":"Nantes","ShipRegion":null,"ShipPostalCode":"44000","ShipCountry":"France"},{"OrderID":10610,"CustomerID":"LAMAI","EmployeeID":8,"OrderDate":"1997/07/25","RequiredDate":"1997/08/22","ShippedDate":"1997/08/06","ShipVia":1,"Freight":"26.7800","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10611,"CustomerID":"WOLZA","EmployeeID":6,"OrderDate":"1997/07/25","RequiredDate":"1997/08/22","ShippedDate":"1997/08/01","ShipVia":2,"Freight":"80.6500","ShipName":"Wolski Zajazd","ShipAddress":"ul. Filtrowa 68","ShipCity":"Warszawa","ShipRegion":null,"ShipPostalCode":"01-012","ShipCountry":"Poland"},{"OrderID":10612,"CustomerID":"SAVEA","EmployeeID":1,"OrderDate":"1997/07/28","RequiredDate":"1997/08/25","ShippedDate":"1997/08/01","ShipVia":2,"Freight":"544.0800","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10613,"CustomerID":"HILAA","EmployeeID":4,"OrderDate":"1997/07/29","RequiredDate":"1997/08/26","ShippedDate":"1997/08/01","ShipVia":2,"Freight":"8.1100","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10614,"CustomerID":"BLAUS","EmployeeID":8,"OrderDate":"1997/07/29","RequiredDate":"1997/08/26","ShippedDate":"1997/08/01","ShipVia":3,"Freight":"1.9300","ShipName":"Blauer See Delikatessen","ShipAddress":"Forsterstr. 57","ShipCity":"Mannheim","ShipRegion":null,"ShipPostalCode":"68306","ShipCountry":"Germany"},{"OrderID":10615,"CustomerID":"WILMK","EmployeeID":2,"OrderDate":"1997/07/30","RequiredDate":"1997/08/27","ShippedDate":"1997/08/06","ShipVia":3,"Freight":"0.7500","ShipName":"Wilman Kala","ShipAddress":"Keskuskatu 45","ShipCity":"Helsinki","ShipRegion":null,"ShipPostalCode":"21240","ShipCountry":"Finland"},{"OrderID":10616,"CustomerID":"GREAL","EmployeeID":1,"OrderDate":"1997/07/31","RequiredDate":"1997/08/28","ShippedDate":"1997/08/05","ShipVia":2,"Freight":"116.5300","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":10617,"CustomerID":"GREAL","EmployeeID":4,"OrderDate":"1997/07/31","RequiredDate":"1997/08/28","ShippedDate":"1997/08/04","ShipVia":2,"Freight":"18.5300","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":10618,"CustomerID":"MEREP","EmployeeID":1,"OrderDate":"1997/08/01","RequiredDate":"1997/09/12","ShippedDate":"1997/08/08","ShipVia":1,"Freight":"154.6800","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10619,"CustomerID":"MEREP","EmployeeID":3,"OrderDate":"1997/08/04","RequiredDate":"1997/09/01","ShippedDate":"1997/08/07","ShipVia":3,"Freight":"91.0500","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10620,"CustomerID":"LAUGB","EmployeeID":2,"OrderDate":"1997/08/05","RequiredDate":"1997/09/02","ShippedDate":"1997/08/14","ShipVia":3,"Freight":"0.9400","ShipName":"Laughing Bacchus Wine Cellars","ShipAddress":"2319 Elm St.","ShipCity":"Vancouver","ShipRegion":"BC","ShipPostalCode":"V3F 2K1","ShipCountry":"Canada"},{"OrderID":10621,"CustomerID":"ISLAT","EmployeeID":4,"OrderDate":"1997/08/05","RequiredDate":"1997/09/02","ShippedDate":"1997/08/11","ShipVia":2,"Freight":"23.7300","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10622,"CustomerID":"RICAR","EmployeeID":4,"OrderDate":"1997/08/06","RequiredDate":"1997/09/03","ShippedDate":"1997/08/11","ShipVia":3,"Freight":"50.9700","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10623,"CustomerID":"FRANK","EmployeeID":8,"OrderDate":"1997/08/07","RequiredDate":"1997/09/04","ShippedDate":"1997/08/12","ShipVia":2,"Freight":"97.1800","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10624,"CustomerID":"THECR","EmployeeID":4,"OrderDate":"1997/08/07","RequiredDate":"1997/09/04","ShippedDate":"1997/08/19","ShipVia":2,"Freight":"94.8000","ShipName":"The Cracker Box","ShipAddress":"55 Grizzly Peak Rd.","ShipCity":"Butte","ShipRegion":"MT","ShipPostalCode":"59801","ShipCountry":"USA"},{"OrderID":10625,"CustomerID":"ANATR","EmployeeID":3,"OrderDate":"1997/08/08","RequiredDate":"1997/09/05","ShippedDate":"1997/08/14","ShipVia":1,"Freight":"43.9000","ShipName":"Ana Trujillo Emparedados y helados","ShipAddress":"Avda. de la Constitucion 2222","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05021","ShipCountry":"Mexico"},{"OrderID":10626,"CustomerID":"BERGS","EmployeeID":1,"OrderDate":"1997/08/11","RequiredDate":"1997/09/08","ShippedDate":"1997/08/20","ShipVia":2,"Freight":"138.6900","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10627,"CustomerID":"SAVEA","EmployeeID":8,"OrderDate":"1997/08/11","RequiredDate":"1997/09/22","ShippedDate":"1997/08/21","ShipVia":3,"Freight":"107.4600","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10628,"CustomerID":"BLONP","EmployeeID":4,"OrderDate":"1997/08/12","RequiredDate":"1997/09/09","ShippedDate":"1997/08/20","ShipVia":3,"Freight":"30.3600","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10629,"CustomerID":"GODOS","EmployeeID":4,"OrderDate":"1997/08/12","RequiredDate":"1997/09/09","ShippedDate":"1997/08/20","ShipVia":3,"Freight":"85.4600","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":10630,"CustomerID":"KOENE","EmployeeID":1,"OrderDate":"1997/08/13","RequiredDate":"1997/09/10","ShippedDate":"1997/08/19","ShipVia":2,"Freight":"32.3500","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10631,"CustomerID":"LAMAI","EmployeeID":8,"OrderDate":"1997/08/14","RequiredDate":"1997/09/11","ShippedDate":"1997/08/15","ShipVia":1,"Freight":"0.8700","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10632,"CustomerID":"WANDK","EmployeeID":8,"OrderDate":"1997/08/14","RequiredDate":"1997/09/11","ShippedDate":"1997/08/19","ShipVia":1,"Freight":"41.3800","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10633,"CustomerID":"ERNSH","EmployeeID":7,"OrderDate":"1997/08/15","RequiredDate":"1997/09/12","ShippedDate":"1997/08/18","ShipVia":3,"Freight":"477.9000","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10634,"CustomerID":"FOLIG","EmployeeID":4,"OrderDate":"1997/08/15","RequiredDate":"1997/09/12","ShippedDate":"1997/08/21","ShipVia":3,"Freight":"487.3800","ShipName":"Folies gourmandes","ShipAddress":"184, chaussee de Tournai","ShipCity":"Lille","ShipRegion":null,"ShipPostalCode":"59000","ShipCountry":"France"},{"OrderID":10635,"CustomerID":"MAGAA","EmployeeID":8,"OrderDate":"1997/08/18","RequiredDate":"1997/09/15","ShippedDate":"1997/08/21","ShipVia":3,"Freight":"47.4600","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10636,"CustomerID":"WARTH","EmployeeID":4,"OrderDate":"1997/08/19","RequiredDate":"1997/09/16","ShippedDate":"1997/08/26","ShipVia":1,"Freight":"1.1500","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10637,"CustomerID":"QUEEN","EmployeeID":6,"OrderDate":"1997/08/19","RequiredDate":"1997/09/16","ShippedDate":"1997/08/26","ShipVia":1,"Freight":"201.2900","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10638,"CustomerID":"LINOD","EmployeeID":3,"OrderDate":"1997/08/20","RequiredDate":"1997/09/17","ShippedDate":"1997/09/01","ShipVia":1,"Freight":"158.4400","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10639,"CustomerID":"SANTG","EmployeeID":7,"OrderDate":"1997/08/20","RequiredDate":"1997/09/17","ShippedDate":"1997/08/27","ShipVia":3,"Freight":"38.6400","ShipName":"Sante Gourmet","ShipAddress":"Erling Skakkes gate 78","ShipCity":"Stavern","ShipRegion":null,"ShipPostalCode":"4110","ShipCountry":"Norway"},{"OrderID":10640,"CustomerID":"WANDK","EmployeeID":4,"OrderDate":"1997/08/21","RequiredDate":"1997/09/18","ShippedDate":"1997/08/28","ShipVia":1,"Freight":"23.5500","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10641,"CustomerID":"HILAA","EmployeeID":4,"OrderDate":"1997/08/22","RequiredDate":"1997/09/19","ShippedDate":"1997/08/26","ShipVia":2,"Freight":"179.6100","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10642,"CustomerID":"SIMOB","EmployeeID":7,"OrderDate":"1997/08/22","RequiredDate":"1997/09/19","ShippedDate":"1997/09/05","ShipVia":3,"Freight":"41.8900","ShipName":"Simons bistro","ShipAddress":"Vinb?ltet 34","ShipCity":"Kobenhavn","ShipRegion":null,"ShipPostalCode":"1734","ShipCountry":"Denmark"},{"OrderID":10643,"CustomerID":"ALFKI","EmployeeID":6,"OrderDate":"1997/08/25","RequiredDate":"1997/09/22","ShippedDate":"1997/09/02","ShipVia":1,"Freight":"29.4600","ShipName":"Alfreds Futterkiste","ShipAddress":"Obere Str. 57","ShipCity":"Berlin","ShipRegion":null,"ShipPostalCode":"12209","ShipCountry":"Germany"},{"OrderID":10644,"CustomerID":"WELLI","EmployeeID":3,"OrderDate":"1997/08/25","RequiredDate":"1997/09/22","ShippedDate":"1997/09/01","ShipVia":2,"Freight":"0.1400","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10645,"CustomerID":"HANAR","EmployeeID":4,"OrderDate":"1997/08/26","RequiredDate":"1997/09/23","ShippedDate":"1997/09/02","ShipVia":1,"Freight":"12.4100","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10646,"CustomerID":"HUNGO","EmployeeID":9,"OrderDate":"1997/08/27","RequiredDate":"1997/10/08","ShippedDate":"1997/09/03","ShipVia":3,"Freight":"142.3300","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10647,"CustomerID":"QUEDE","EmployeeID":4,"OrderDate":"1997/08/27","RequiredDate":"1997/09/10","ShippedDate":"1997/09/03","ShipVia":2,"Freight":"45.5400","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10648,"CustomerID":"RICAR","EmployeeID":5,"OrderDate":"1997/08/28","RequiredDate":"1997/10/09","ShippedDate":"1997/09/09","ShipVia":2,"Freight":"14.2500","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10649,"CustomerID":"MAISD","EmployeeID":5,"OrderDate":"1997/08/28","RequiredDate":"1997/09/25","ShippedDate":"1997/08/29","ShipVia":3,"Freight":"6.2000","ShipName":"Maison Dewey","ShipAddress":"Rue Joseph-Bens 532","ShipCity":"Bruxelles","ShipRegion":null,"ShipPostalCode":"B-1180","ShipCountry":"Belgium"},{"OrderID":10650,"CustomerID":"FAMIA","EmployeeID":5,"OrderDate":"1997/08/29","RequiredDate":"1997/09/26","ShippedDate":"1997/09/03","ShipVia":3,"Freight":"176.8100","ShipName":"Familia Arquibaldo","ShipAddress":"Rua Oros, 92","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05442-030","ShipCountry":"Brazil"},{"OrderID":10651,"CustomerID":"WANDK","EmployeeID":8,"OrderDate":"1997/09/01","RequiredDate":"1997/09/29","ShippedDate":"1997/09/11","ShipVia":2,"Freight":"20.6000","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10652,"CustomerID":"GOURL","EmployeeID":4,"OrderDate":"1997/09/01","RequiredDate":"1997/09/29","ShippedDate":"1997/09/08","ShipVia":2,"Freight":"7.1400","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":10653,"CustomerID":"FRANK","EmployeeID":1,"OrderDate":"1997/09/02","RequiredDate":"1997/09/30","ShippedDate":"1997/09/19","ShipVia":1,"Freight":"93.2500","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10654,"CustomerID":"BERGS","EmployeeID":5,"OrderDate":"1997/09/02","RequiredDate":"1997/09/30","ShippedDate":"1997/09/11","ShipVia":1,"Freight":"55.2600","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10655,"CustomerID":"REGGC","EmployeeID":1,"OrderDate":"1997/09/03","RequiredDate":"1997/10/01","ShippedDate":"1997/09/11","ShipVia":2,"Freight":"4.4100","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10656,"CustomerID":"GREAL","EmployeeID":6,"OrderDate":"1997/09/04","RequiredDate":"1997/10/02","ShippedDate":"1997/09/10","ShipVia":1,"Freight":"57.1500","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":10657,"CustomerID":"SAVEA","EmployeeID":2,"OrderDate":"1997/09/04","RequiredDate":"1997/10/02","ShippedDate":"1997/09/15","ShipVia":2,"Freight":"352.6900","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10658,"CustomerID":"QUICK","EmployeeID":4,"OrderDate":"1997/09/05","RequiredDate":"1997/10/03","ShippedDate":"1997/09/08","ShipVia":1,"Freight":"364.1500","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10659,"CustomerID":"QUEEN","EmployeeID":7,"OrderDate":"1997/09/05","RequiredDate":"1997/10/03","ShippedDate":"1997/09/10","ShipVia":2,"Freight":"105.8100","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10660,"CustomerID":"HUNGC","EmployeeID":8,"OrderDate":"1997/09/08","RequiredDate":"1997/10/06","ShippedDate":"1997/10/15","ShipVia":1,"Freight":"111.2900","ShipName":"Hungry Coyote Import Store","ShipAddress":"City Center Plaza 516 Main St.","ShipCity":"Elgin","ShipRegion":"OR","ShipPostalCode":"97827","ShipCountry":"USA"},{"OrderID":10661,"CustomerID":"HUNGO","EmployeeID":7,"OrderDate":"1997/09/09","RequiredDate":"1997/10/07","ShippedDate":"1997/09/15","ShipVia":3,"Freight":"17.5500","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10662,"CustomerID":"LONEP","EmployeeID":3,"OrderDate":"1997/09/09","RequiredDate":"1997/10/07","ShippedDate":"1997/09/18","ShipVia":2,"Freight":"1.2800","ShipName":"Lonesome Pine Restaurant","ShipAddress":"89 Chiaroscuro Rd.","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97219","ShipCountry":"USA"},{"OrderID":10663,"CustomerID":"BONAP","EmployeeID":2,"OrderDate":"1997/09/10","RequiredDate":"1997/09/24","ShippedDate":"1997/10/03","ShipVia":2,"Freight":"113.1500","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10664,"CustomerID":"FURIB","EmployeeID":1,"OrderDate":"1997/09/10","RequiredDate":"1997/10/08","ShippedDate":"1997/09/19","ShipVia":3,"Freight":"1.2700","ShipName":"Furia Bacalhau e Frutos do Mar","ShipAddress":"Jardim das rosas n. 32","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1675","ShipCountry":"Portugal"},{"OrderID":10665,"CustomerID":"LONEP","EmployeeID":1,"OrderDate":"1997/09/11","RequiredDate":"1997/10/09","ShippedDate":"1997/09/17","ShipVia":2,"Freight":"26.3100","ShipName":"Lonesome Pine Restaurant","ShipAddress":"89 Chiaroscuro Rd.","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97219","ShipCountry":"USA"},{"OrderID":10666,"CustomerID":"RICSU","EmployeeID":7,"OrderDate":"1997/09/12","RequiredDate":"1997/10/10","ShippedDate":"1997/09/22","ShipVia":2,"Freight":"232.4200","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":10667,"CustomerID":"ERNSH","EmployeeID":7,"OrderDate":"1997/09/12","RequiredDate":"1997/10/10","ShippedDate":"1997/09/19","ShipVia":1,"Freight":"78.0900","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10668,"CustomerID":"WANDK","EmployeeID":1,"OrderDate":"1997/09/15","RequiredDate":"1997/10/13","ShippedDate":"1997/09/23","ShipVia":2,"Freight":"47.2200","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":10669,"CustomerID":"SIMOB","EmployeeID":2,"OrderDate":"1997/09/15","RequiredDate":"1997/10/13","ShippedDate":"1997/09/22","ShipVia":1,"Freight":"24.3900","ShipName":"Simons bistro","ShipAddress":"Vinb?ltet 34","ShipCity":"Kobenhavn","ShipRegion":null,"ShipPostalCode":"1734","ShipCountry":"Denmark"},{"OrderID":10670,"CustomerID":"FRANK","EmployeeID":4,"OrderDate":"1997/09/16","RequiredDate":"1997/10/14","ShippedDate":"1997/09/18","ShipVia":1,"Freight":"203.4800","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10671,"CustomerID":"FRANR","EmployeeID":1,"OrderDate":"1997/09/17","RequiredDate":"1997/10/15","ShippedDate":"1997/09/24","ShipVia":1,"Freight":"30.3400","ShipName":"France restauration","ShipAddress":"54, rue Royale","ShipCity":"Nantes","ShipRegion":null,"ShipPostalCode":"44000","ShipCountry":"France"},{"OrderID":10672,"CustomerID":"BERGS","EmployeeID":9,"OrderDate":"1997/09/17","RequiredDate":"1997/10/01","ShippedDate":"1997/09/26","ShipVia":2,"Freight":"95.7500","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10673,"CustomerID":"WILMK","EmployeeID":2,"OrderDate":"1997/09/18","RequiredDate":"1997/10/16","ShippedDate":"1997/09/19","ShipVia":1,"Freight":"22.7600","ShipName":"Wilman Kala","ShipAddress":"Keskuskatu 45","ShipCity":"Helsinki","ShipRegion":null,"ShipPostalCode":"21240","ShipCountry":"Finland"},{"OrderID":10674,"CustomerID":"ISLAT","EmployeeID":4,"OrderDate":"1997/09/18","RequiredDate":"1997/10/16","ShippedDate":"1997/09/30","ShipVia":2,"Freight":"0.9000","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10675,"CustomerID":"FRANK","EmployeeID":5,"OrderDate":"1997/09/19","RequiredDate":"1997/10/17","ShippedDate":"1997/09/23","ShipVia":2,"Freight":"31.8500","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10676,"CustomerID":"TORTU","EmployeeID":2,"OrderDate":"1997/09/22","RequiredDate":"1997/10/20","ShippedDate":"1997/09/29","ShipVia":2,"Freight":"2.0100","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10677,"CustomerID":"ANTON","EmployeeID":1,"OrderDate":"1997/09/22","RequiredDate":"1997/10/20","ShippedDate":"1997/09/26","ShipVia":3,"Freight":"4.0300","ShipName":"Antonio Moreno Taqueria","ShipAddress":"Mataderos  2312","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05023","ShipCountry":"Mexico"},{"OrderID":10678,"CustomerID":"SAVEA","EmployeeID":7,"OrderDate":"1997/09/23","RequiredDate":"1997/10/21","ShippedDate":"1997/10/16","ShipVia":3,"Freight":"388.9800","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10679,"CustomerID":"BLONP","EmployeeID":8,"OrderDate":"1997/09/23","RequiredDate":"1997/10/21","ShippedDate":"1997/09/30","ShipVia":3,"Freight":"27.9400","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10680,"CustomerID":"OLDWO","EmployeeID":1,"OrderDate":"1997/09/24","RequiredDate":"1997/10/22","ShippedDate":"1997/09/26","ShipVia":1,"Freight":"26.6100","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10681,"CustomerID":"GREAL","EmployeeID":3,"OrderDate":"1997/09/25","RequiredDate":"1997/10/23","ShippedDate":"1997/09/30","ShipVia":3,"Freight":"76.1300","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":10682,"CustomerID":"ANTON","EmployeeID":3,"OrderDate":"1997/09/25","RequiredDate":"1997/10/23","ShippedDate":"1997/10/01","ShipVia":2,"Freight":"36.1300","ShipName":"Antonio Moreno Taqueria","ShipAddress":"Mataderos  2312","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05023","ShipCountry":"Mexico"},{"OrderID":10683,"CustomerID":"DUMON","EmployeeID":2,"OrderDate":"1997/09/26","RequiredDate":"1997/10/24","ShippedDate":"1997/10/01","ShipVia":1,"Freight":"4.4000","ShipName":"Du monde entier","ShipAddress":"67, rue des Cinquante Otages","ShipCity":"Nantes","ShipRegion":null,"ShipPostalCode":"44000","ShipCountry":"France"},{"OrderID":10684,"CustomerID":"OTTIK","EmployeeID":3,"OrderDate":"1997/09/26","RequiredDate":"1997/10/24","ShippedDate":"1997/09/30","ShipVia":1,"Freight":"145.6300","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":10685,"CustomerID":"GOURL","EmployeeID":4,"OrderDate":"1997/09/29","RequiredDate":"1997/10/13","ShippedDate":"1997/10/03","ShipVia":2,"Freight":"33.7500","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":10686,"CustomerID":"PICCO","EmployeeID":2,"OrderDate":"1997/09/30","RequiredDate":"1997/10/28","ShippedDate":"1997/10/08","ShipVia":1,"Freight":"96.5000","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10687,"CustomerID":"HUNGO","EmployeeID":9,"OrderDate":"1997/09/30","RequiredDate":"1997/10/28","ShippedDate":"1997/10/30","ShipVia":2,"Freight":"296.4300","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10688,"CustomerID":"VAFFE","EmployeeID":4,"OrderDate":"1997/10/01","RequiredDate":"1997/10/15","ShippedDate":"1997/10/07","ShipVia":2,"Freight":"299.0900","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10689,"CustomerID":"BERGS","EmployeeID":1,"OrderDate":"1997/10/01","RequiredDate":"1997/10/29","ShippedDate":"1997/10/07","ShipVia":2,"Freight":"13.4200","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10690,"CustomerID":"HANAR","EmployeeID":1,"OrderDate":"1997/10/02","RequiredDate":"1997/10/30","ShippedDate":"1997/10/03","ShipVia":1,"Freight":"15.8000","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10691,"CustomerID":"QUICK","EmployeeID":2,"OrderDate":"1997/10/03","RequiredDate":"1997/11/14","ShippedDate":"1997/10/22","ShipVia":2,"Freight":"810.0500","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10692,"CustomerID":"ALFKI","EmployeeID":4,"OrderDate":"1997/10/03","RequiredDate":"1997/10/31","ShippedDate":"1997/10/13","ShipVia":2,"Freight":"61.0200","ShipName":"Alfred's Futterkiste","ShipAddress":"Obere Str. 57","ShipCity":"Berlin","ShipRegion":null,"ShipPostalCode":"12209","ShipCountry":"Germany"},{"OrderID":10693,"CustomerID":"WHITC","EmployeeID":3,"OrderDate":"1997/10/06","RequiredDate":"1997/10/20","ShippedDate":"1997/10/10","ShipVia":3,"Freight":"139.3400","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10694,"CustomerID":"QUICK","EmployeeID":8,"OrderDate":"1997/10/06","RequiredDate":"1997/11/03","ShippedDate":"1997/10/09","ShipVia":3,"Freight":"398.3600","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10695,"CustomerID":"WILMK","EmployeeID":7,"OrderDate":"1997/10/07","RequiredDate":"1997/11/18","ShippedDate":"1997/10/14","ShipVia":1,"Freight":"16.7200","ShipName":"Wilman Kala","ShipAddress":"Keskuskatu 45","ShipCity":"Helsinki","ShipRegion":null,"ShipPostalCode":"21240","ShipCountry":"Finland"},{"OrderID":10696,"CustomerID":"WHITC","EmployeeID":8,"OrderDate":"1997/10/08","RequiredDate":"1997/11/19","ShippedDate":"1997/10/14","ShipVia":3,"Freight":"102.5500","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10697,"CustomerID":"LINOD","EmployeeID":3,"OrderDate":"1997/10/08","RequiredDate":"1997/11/05","ShippedDate":"1997/10/14","ShipVia":1,"Freight":"45.5200","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10698,"CustomerID":"ERNSH","EmployeeID":4,"OrderDate":"1997/10/09","RequiredDate":"1997/11/06","ShippedDate":"1997/10/17","ShipVia":1,"Freight":"272.4700","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10699,"CustomerID":"MORGK","EmployeeID":3,"OrderDate":"1997/10/09","RequiredDate":"1997/11/06","ShippedDate":"1997/10/13","ShipVia":3,"Freight":"0.5800","ShipName":"Morgenstern Gesundkost","ShipAddress":"Heerstr. 22","ShipCity":"Leipzig","ShipRegion":null,"ShipPostalCode":"04179","ShipCountry":"Germany"},{"OrderID":10700,"CustomerID":"SAVEA","EmployeeID":3,"OrderDate":"1997/10/10","RequiredDate":"1997/11/07","ShippedDate":"1997/10/16","ShipVia":1,"Freight":"65.1000","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10701,"CustomerID":"HUNGO","EmployeeID":6,"OrderDate":"1997/10/13","RequiredDate":"1997/10/27","ShippedDate":"1997/10/15","ShipVia":3,"Freight":"220.3100","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10702,"CustomerID":"ALFKI","EmployeeID":4,"OrderDate":"1997/10/13","RequiredDate":"1997/11/24","ShippedDate":"1997/10/21","ShipVia":1,"Freight":"23.9400","ShipName":"Alfred's Futterkiste","ShipAddress":"Obere Str. 57","ShipCity":"Berlin","ShipRegion":null,"ShipPostalCode":"12209","ShipCountry":"Germany"},{"OrderID":10703,"CustomerID":"FOLKO","EmployeeID":6,"OrderDate":"1997/10/14","RequiredDate":"1997/11/11","ShippedDate":"1997/10/20","ShipVia":2,"Freight":"152.3000","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10704,"CustomerID":"QUEEN","EmployeeID":6,"OrderDate":"1997/10/14","RequiredDate":"1997/11/11","ShippedDate":"1997/11/07","ShipVia":1,"Freight":"4.7800","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10705,"CustomerID":"HILAA","EmployeeID":9,"OrderDate":"1997/10/15","RequiredDate":"1997/11/12","ShippedDate":"1997/11/18","ShipVia":2,"Freight":"3.5200","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10706,"CustomerID":"OLDWO","EmployeeID":8,"OrderDate":"1997/10/16","RequiredDate":"1997/11/13","ShippedDate":"1997/10/21","ShipVia":3,"Freight":"135.6300","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10707,"CustomerID":"AROUT","EmployeeID":4,"OrderDate":"1997/10/16","RequiredDate":"1997/10/30","ShippedDate":"1997/10/23","ShipVia":3,"Freight":"21.7400","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10708,"CustomerID":"THEBI","EmployeeID":6,"OrderDate":"1997/10/17","RequiredDate":"1997/11/28","ShippedDate":"1997/11/05","ShipVia":2,"Freight":"2.9600","ShipName":"The Big Cheese","ShipAddress":"89 Jefferson Way Suite 2","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97201","ShipCountry":"USA"},{"OrderID":10709,"CustomerID":"GOURL","EmployeeID":1,"OrderDate":"1997/10/17","RequiredDate":"1997/11/14","ShippedDate":"1997/11/20","ShipVia":3,"Freight":"210.8000","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":10710,"CustomerID":"FRANS","EmployeeID":1,"OrderDate":"1997/10/20","RequiredDate":"1997/11/17","ShippedDate":"1997/10/23","ShipVia":1,"Freight":"4.9800","ShipName":"Franchi S.p.A.","ShipAddress":"Via Monte Bianco 34","ShipCity":"Torino","ShipRegion":null,"ShipPostalCode":"10100","ShipCountry":"Italy"},{"OrderID":10711,"CustomerID":"SAVEA","EmployeeID":5,"OrderDate":"1997/10/21","RequiredDate":"1997/12/02","ShippedDate":"1997/10/29","ShipVia":2,"Freight":"52.4100","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10712,"CustomerID":"HUNGO","EmployeeID":3,"OrderDate":"1997/10/21","RequiredDate":"1997/11/18","ShippedDate":"1997/10/31","ShipVia":1,"Freight":"89.9300","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10713,"CustomerID":"SAVEA","EmployeeID":1,"OrderDate":"1997/10/22","RequiredDate":"1997/11/19","ShippedDate":"1997/10/24","ShipVia":1,"Freight":"167.0500","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10714,"CustomerID":"SAVEA","EmployeeID":5,"OrderDate":"1997/10/22","RequiredDate":"1997/11/19","ShippedDate":"1997/10/27","ShipVia":3,"Freight":"24.4900","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10715,"CustomerID":"BONAP","EmployeeID":3,"OrderDate":"1997/10/23","RequiredDate":"1997/11/06","ShippedDate":"1997/10/29","ShipVia":1,"Freight":"63.2000","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10716,"CustomerID":"RANCH","EmployeeID":4,"OrderDate":"1997/10/24","RequiredDate":"1997/11/21","ShippedDate":"1997/10/27","ShipVia":2,"Freight":"22.5700","ShipName":"Rancho grande","ShipAddress":"Av. del Libertador 900","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10717,"CustomerID":"FRANK","EmployeeID":1,"OrderDate":"1997/10/24","RequiredDate":"1997/11/21","ShippedDate":"1997/10/29","ShipVia":2,"Freight":"59.2500","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10718,"CustomerID":"KOENE","EmployeeID":1,"OrderDate":"1997/10/27","RequiredDate":"1997/11/24","ShippedDate":"1997/10/29","ShipVia":3,"Freight":"170.8800","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10719,"CustomerID":"LETSS","EmployeeID":8,"OrderDate":"1997/10/27","RequiredDate":"1997/11/24","ShippedDate":"1997/11/05","ShipVia":2,"Freight":"51.4400","ShipName":"Let's Stop N Shop","ShipAddress":"87 Polk St. Suite 5","ShipCity":"San Francisco","ShipRegion":"CA","ShipPostalCode":"94117","ShipCountry":"USA"},{"OrderID":10720,"CustomerID":"QUEDE","EmployeeID":8,"OrderDate":"1997/10/28","RequiredDate":"1997/11/11","ShippedDate":"1997/11/05","ShipVia":2,"Freight":"9.5300","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10721,"CustomerID":"QUICK","EmployeeID":5,"OrderDate":"1997/10/29","RequiredDate":"1997/11/26","ShippedDate":"1997/10/31","ShipVia":3,"Freight":"48.9200","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10722,"CustomerID":"SAVEA","EmployeeID":8,"OrderDate":"1997/10/29","RequiredDate":"1997/12/10","ShippedDate":"1997/11/04","ShipVia":1,"Freight":"74.5800","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10723,"CustomerID":"WHITC","EmployeeID":3,"OrderDate":"1997/10/30","RequiredDate":"1997/11/27","ShippedDate":"1997/11/25","ShipVia":1,"Freight":"21.7200","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10724,"CustomerID":"MEREP","EmployeeID":8,"OrderDate":"1997/10/30","RequiredDate":"1997/12/11","ShippedDate":"1997/11/05","ShipVia":2,"Freight":"57.7500","ShipName":"Mere Paillarde","ShipAddress":"43 rue St. Laurent","ShipCity":"Montreal","ShipRegion":"Quebec","ShipPostalCode":"H1J 1C3","ShipCountry":"Canada"},{"OrderID":10725,"CustomerID":"FAMIA","EmployeeID":4,"OrderDate":"1997/10/31","RequiredDate":"1997/11/28","ShippedDate":"1997/11/05","ShipVia":3,"Freight":"10.8300","ShipName":"Familia Arquibaldo","ShipAddress":"Rua Oros, 92","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05442-030","ShipCountry":"Brazil"},{"OrderID":10726,"CustomerID":"EASTC","EmployeeID":4,"OrderDate":"1997/11/03","RequiredDate":"1997/11/17","ShippedDate":"1997/12/05","ShipVia":1,"Freight":"16.5600","ShipName":"Eastern Connection","ShipAddress":"35 King George","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX3 6FW","ShipCountry":"UK"},{"OrderID":10727,"CustomerID":"REGGC","EmployeeID":2,"OrderDate":"1997/11/03","RequiredDate":"1997/12/01","ShippedDate":"1997/12/05","ShipVia":1,"Freight":"89.9000","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10728,"CustomerID":"QUEEN","EmployeeID":4,"OrderDate":"1997/11/04","RequiredDate":"1997/12/02","ShippedDate":"1997/11/11","ShipVia":2,"Freight":"58.3300","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10729,"CustomerID":"LINOD","EmployeeID":8,"OrderDate":"1997/11/04","RequiredDate":"1997/12/16","ShippedDate":"1997/11/14","ShipVia":3,"Freight":"141.0600","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10730,"CustomerID":"BONAP","EmployeeID":5,"OrderDate":"1997/11/05","RequiredDate":"1997/12/03","ShippedDate":"1997/11/14","ShipVia":1,"Freight":"20.1200","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10731,"CustomerID":"CHOPS","EmployeeID":7,"OrderDate":"1997/11/06","RequiredDate":"1997/12/04","ShippedDate":"1997/11/14","ShipVia":1,"Freight":"96.6500","ShipName":"Chop-suey Chinese","ShipAddress":"Hauptstr. 31","ShipCity":"Bern","ShipRegion":null,"ShipPostalCode":"3012","ShipCountry":"Switzerland"},{"OrderID":10732,"CustomerID":"BONAP","EmployeeID":3,"OrderDate":"1997/11/06","RequiredDate":"1997/12/04","ShippedDate":"1997/11/07","ShipVia":1,"Freight":"16.9700","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10733,"CustomerID":"BERGS","EmployeeID":1,"OrderDate":"1997/11/07","RequiredDate":"1997/12/05","ShippedDate":"1997/11/10","ShipVia":3,"Freight":"110.1100","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10734,"CustomerID":"GOURL","EmployeeID":2,"OrderDate":"1997/11/07","RequiredDate":"1997/12/05","ShippedDate":"1997/11/12","ShipVia":3,"Freight":"1.6300","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":10735,"CustomerID":"LETSS","EmployeeID":6,"OrderDate":"1997/11/10","RequiredDate":"1997/12/08","ShippedDate":"1997/11/21","ShipVia":2,"Freight":"45.9700","ShipName":"Let's Stop N Shop","ShipAddress":"87 Polk St. Suite 5","ShipCity":"San Francisco","ShipRegion":"CA","ShipPostalCode":"94117","ShipCountry":"USA"},{"OrderID":10736,"CustomerID":"HUNGO","EmployeeID":9,"OrderDate":"1997/11/11","RequiredDate":"1997/12/09","ShippedDate":"1997/11/21","ShipVia":2,"Freight":"44.1000","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10737,"CustomerID":"VINET","EmployeeID":2,"OrderDate":"1997/11/11","RequiredDate":"1997/12/09","ShippedDate":"1997/11/18","ShipVia":2,"Freight":"7.7900","ShipName":"Vins et alcools Chevalier","ShipAddress":"59 rue de l'Abbaye","ShipCity":"Reims","ShipRegion":null,"ShipPostalCode":"51100","ShipCountry":"France"},{"OrderID":10738,"CustomerID":"SPECD","EmployeeID":2,"OrderDate":"1997/11/12","RequiredDate":"1997/12/10","ShippedDate":"1997/11/18","ShipVia":1,"Freight":"2.9100","ShipName":"Specialites du monde","ShipAddress":"25, rue Lauriston","ShipCity":"Paris","ShipRegion":null,"ShipPostalCode":"75016","ShipCountry":"France"},{"OrderID":10739,"CustomerID":"VINET","EmployeeID":3,"OrderDate":"1997/11/12","RequiredDate":"1997/12/10","ShippedDate":"1997/11/17","ShipVia":3,"Freight":"11.0800","ShipName":"Vins et alcools Chevalier","ShipAddress":"59 rue de l'Abbaye","ShipCity":"Reims","ShipRegion":null,"ShipPostalCode":"51100","ShipCountry":"France"},{"OrderID":10740,"CustomerID":"WHITC","EmployeeID":4,"OrderDate":"1997/11/13","RequiredDate":"1997/12/11","ShippedDate":"1997/11/25","ShipVia":2,"Freight":"81.8800","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10741,"CustomerID":"AROUT","EmployeeID":4,"OrderDate":"1997/11/14","RequiredDate":"1997/11/28","ShippedDate":"1997/11/18","ShipVia":3,"Freight":"10.9600","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10742,"CustomerID":"BOTTM","EmployeeID":3,"OrderDate":"1997/11/14","RequiredDate":"1997/12/12","ShippedDate":"1997/11/18","ShipVia":3,"Freight":"243.7300","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10743,"CustomerID":"AROUT","EmployeeID":1,"OrderDate":"1997/11/17","RequiredDate":"1997/12/15","ShippedDate":"1997/11/21","ShipVia":2,"Freight":"23.7200","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10744,"CustomerID":"VAFFE","EmployeeID":6,"OrderDate":"1997/11/17","RequiredDate":"1997/12/15","ShippedDate":"1997/11/24","ShipVia":1,"Freight":"69.1900","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10745,"CustomerID":"QUICK","EmployeeID":9,"OrderDate":"1997/11/18","RequiredDate":"1997/12/16","ShippedDate":"1997/11/27","ShipVia":1,"Freight":"3.5200","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10746,"CustomerID":"CHOPS","EmployeeID":1,"OrderDate":"1997/11/19","RequiredDate":"1997/12/17","ShippedDate":"1997/11/21","ShipVia":3,"Freight":"31.4300","ShipName":"Chop-suey Chinese","ShipAddress":"Hauptstr. 31","ShipCity":"Bern","ShipRegion":null,"ShipPostalCode":"3012","ShipCountry":"Switzerland"},{"OrderID":10747,"CustomerID":"PICCO","EmployeeID":6,"OrderDate":"1997/11/19","RequiredDate":"1997/12/17","ShippedDate":"1997/11/26","ShipVia":1,"Freight":"117.3300","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10748,"CustomerID":"SAVEA","EmployeeID":3,"OrderDate":"1997/11/20","RequiredDate":"1997/12/18","ShippedDate":"1997/11/28","ShipVia":1,"Freight":"232.5500","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10749,"CustomerID":"ISLAT","EmployeeID":4,"OrderDate":"1997/11/20","RequiredDate":"1997/12/18","ShippedDate":"1997/12/19","ShipVia":2,"Freight":"61.5300","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10750,"CustomerID":"WARTH","EmployeeID":9,"OrderDate":"1997/11/21","RequiredDate":"1997/12/19","ShippedDate":"1997/11/24","ShipVia":1,"Freight":"79.3000","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10751,"CustomerID":"RICSU","EmployeeID":3,"OrderDate":"1997/11/24","RequiredDate":"1997/12/22","ShippedDate":"1997/12/03","ShipVia":3,"Freight":"130.7900","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":10752,"CustomerID":"NORTS","EmployeeID":2,"OrderDate":"1997/11/24","RequiredDate":"1997/12/22","ShippedDate":"1997/11/28","ShipVia":3,"Freight":"1.3900","ShipName":"North/South","ShipAddress":"South House 300 Queensbridge","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"SW7 1RZ","ShipCountry":"UK"},{"OrderID":10753,"CustomerID":"FRANS","EmployeeID":3,"OrderDate":"1997/11/25","RequiredDate":"1997/12/23","ShippedDate":"1997/11/27","ShipVia":1,"Freight":"7.7000","ShipName":"Franchi S.p.A.","ShipAddress":"Via Monte Bianco 34","ShipCity":"Torino","ShipRegion":null,"ShipPostalCode":"10100","ShipCountry":"Italy"},{"OrderID":10754,"CustomerID":"MAGAA","EmployeeID":6,"OrderDate":"1997/11/25","RequiredDate":"1997/12/23","ShippedDate":"1997/11/27","ShipVia":3,"Freight":"2.3800","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10755,"CustomerID":"BONAP","EmployeeID":4,"OrderDate":"1997/11/26","RequiredDate":"1997/12/24","ShippedDate":"1997/11/28","ShipVia":2,"Freight":"16.7100","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10756,"CustomerID":"SPLIR","EmployeeID":8,"OrderDate":"1997/11/27","RequiredDate":"1997/12/25","ShippedDate":"1997/12/02","ShipVia":2,"Freight":"73.2100","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10757,"CustomerID":"SAVEA","EmployeeID":6,"OrderDate":"1997/11/27","RequiredDate":"1997/12/25","ShippedDate":"1997/12/15","ShipVia":1,"Freight":"8.1900","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10758,"CustomerID":"RICSU","EmployeeID":3,"OrderDate":"1997/11/28","RequiredDate":"1997/12/26","ShippedDate":"1997/12/04","ShipVia":3,"Freight":"138.1700","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":10759,"CustomerID":"ANATR","EmployeeID":3,"OrderDate":"1997/11/28","RequiredDate":"1997/12/26","ShippedDate":"1997/12/12","ShipVia":3,"Freight":"11.9900","ShipName":"Ana Trujillo Emparedados y helados","ShipAddress":"Avda. de la Constitucion 2222","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05021","ShipCountry":"Mexico"},{"OrderID":10760,"CustomerID":"MAISD","EmployeeID":4,"OrderDate":"1997/12/01","RequiredDate":"1997/12/29","ShippedDate":"1997/12/10","ShipVia":1,"Freight":"155.6400","ShipName":"Maison Dewey","ShipAddress":"Rue Joseph-Bens 532","ShipCity":"Bruxelles","ShipRegion":null,"ShipPostalCode":"B-1180","ShipCountry":"Belgium"},{"OrderID":10761,"CustomerID":"RATTC","EmployeeID":5,"OrderDate":"1997/12/02","RequiredDate":"1997/12/30","ShippedDate":"1997/12/08","ShipVia":2,"Freight":"18.6600","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10762,"CustomerID":"FOLKO","EmployeeID":3,"OrderDate":"1997/12/02","RequiredDate":"1997/12/30","ShippedDate":"1997/12/09","ShipVia":1,"Freight":"328.7400","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10763,"CustomerID":"FOLIG","EmployeeID":3,"OrderDate":"1997/12/03","RequiredDate":"1997/12/31","ShippedDate":"1997/12/08","ShipVia":3,"Freight":"37.3500","ShipName":"Folies gourmandes","ShipAddress":"184, chaussee de Tournai","ShipCity":"Lille","ShipRegion":null,"ShipPostalCode":"59000","ShipCountry":"France"},{"OrderID":10764,"CustomerID":"ERNSH","EmployeeID":6,"OrderDate":"1997/12/03","RequiredDate":"1997/12/31","ShippedDate":"1997/12/08","ShipVia":3,"Freight":"145.4500","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10765,"CustomerID":"QUICK","EmployeeID":3,"OrderDate":"1997/12/04","RequiredDate":"1998/01/01","ShippedDate":"1997/12/09","ShipVia":3,"Freight":"42.7400","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10766,"CustomerID":"OTTIK","EmployeeID":4,"OrderDate":"1997/12/05","RequiredDate":"1998/01/02","ShippedDate":"1997/12/09","ShipVia":1,"Freight":"157.5500","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":10767,"CustomerID":"SUPRD","EmployeeID":4,"OrderDate":"1997/12/05","RequiredDate":"1998/01/02","ShippedDate":"1997/12/15","ShipVia":3,"Freight":"1.5900","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10768,"CustomerID":"AROUT","EmployeeID":3,"OrderDate":"1997/12/08","RequiredDate":"1998/01/05","ShippedDate":"1997/12/15","ShipVia":2,"Freight":"146.3200","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10769,"CustomerID":"VAFFE","EmployeeID":3,"OrderDate":"1997/12/08","RequiredDate":"1998/01/05","ShippedDate":"1997/12/12","ShipVia":1,"Freight":"65.0600","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10770,"CustomerID":"HANAR","EmployeeID":8,"OrderDate":"1997/12/09","RequiredDate":"1998/01/06","ShippedDate":"1997/12/17","ShipVia":3,"Freight":"5.3200","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10771,"CustomerID":"ERNSH","EmployeeID":9,"OrderDate":"1997/12/10","RequiredDate":"1998/01/07","ShippedDate":"1998/01/02","ShipVia":2,"Freight":"11.1900","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10772,"CustomerID":"LEHMS","EmployeeID":3,"OrderDate":"1997/12/10","RequiredDate":"1998/01/07","ShippedDate":"1997/12/19","ShipVia":2,"Freight":"91.2800","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10773,"CustomerID":"ERNSH","EmployeeID":1,"OrderDate":"1997/12/11","RequiredDate":"1998/01/08","ShippedDate":"1997/12/16","ShipVia":3,"Freight":"96.4300","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10774,"CustomerID":"FOLKO","EmployeeID":4,"OrderDate":"1997/12/11","RequiredDate":"1997/12/25","ShippedDate":"1997/12/12","ShipVia":1,"Freight":"48.2000","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10775,"CustomerID":"THECR","EmployeeID":7,"OrderDate":"1997/12/12","RequiredDate":"1998/01/09","ShippedDate":"1997/12/26","ShipVia":1,"Freight":"20.2500","ShipName":"The Cracker Box","ShipAddress":"55 Grizzly Peak Rd.","ShipCity":"Butte","ShipRegion":"MT","ShipPostalCode":"59801","ShipCountry":"USA"},{"OrderID":10776,"CustomerID":"ERNSH","EmployeeID":1,"OrderDate":"1997/12/15","RequiredDate":"1998/01/12","ShippedDate":"1997/12/18","ShipVia":3,"Freight":"351.5300","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10777,"CustomerID":"GOURL","EmployeeID":7,"OrderDate":"1997/12/15","RequiredDate":"1997/12/29","ShippedDate":"1998/01/21","ShipVia":2,"Freight":"3.0100","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":10778,"CustomerID":"BERGS","EmployeeID":3,"OrderDate":"1997/12/16","RequiredDate":"1998/01/13","ShippedDate":"1997/12/24","ShipVia":1,"Freight":"6.7900","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10779,"CustomerID":"MORGK","EmployeeID":3,"OrderDate":"1997/12/16","RequiredDate":"1998/01/13","ShippedDate":"1998/01/14","ShipVia":2,"Freight":"58.1300","ShipName":"Morgenstern Gesundkost","ShipAddress":"Heerstr. 22","ShipCity":"Leipzig","ShipRegion":null,"ShipPostalCode":"04179","ShipCountry":"Germany"},{"OrderID":10780,"CustomerID":"LILAS","EmployeeID":2,"OrderDate":"1997/12/16","RequiredDate":"1997/12/30","ShippedDate":"1997/12/25","ShipVia":1,"Freight":"42.1300","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10781,"CustomerID":"WARTH","EmployeeID":2,"OrderDate":"1997/12/17","RequiredDate":"1998/01/14","ShippedDate":"1997/12/19","ShipVia":3,"Freight":"73.1600","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":10782,"CustomerID":"CACTU","EmployeeID":9,"OrderDate":"1997/12/17","RequiredDate":"1998/01/14","ShippedDate":"1997/12/22","ShipVia":3,"Freight":"1.1000","ShipName":"Cactus Comidas para llevar","ShipAddress":"Cerrito 333","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10783,"CustomerID":"HANAR","EmployeeID":4,"OrderDate":"1997/12/18","RequiredDate":"1998/01/15","ShippedDate":"1997/12/19","ShipVia":2,"Freight":"124.9800","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10784,"CustomerID":"MAGAA","EmployeeID":4,"OrderDate":"1997/12/18","RequiredDate":"1998/01/15","ShippedDate":"1997/12/22","ShipVia":3,"Freight":"70.0900","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10785,"CustomerID":"GROSR","EmployeeID":1,"OrderDate":"1997/12/18","RequiredDate":"1998/01/15","ShippedDate":"1997/12/24","ShipVia":3,"Freight":"1.5100","ShipName":"GROSELLA-Restaurante","ShipAddress":"5? Ave. Los Palos Grandes","ShipCity":"Caracas","ShipRegion":"DF","ShipPostalCode":"1081","ShipCountry":"Venezuela"},{"OrderID":10786,"CustomerID":"QUEEN","EmployeeID":8,"OrderDate":"1997/12/19","RequiredDate":"1998/01/16","ShippedDate":"1997/12/23","ShipVia":1,"Freight":"110.8700","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10787,"CustomerID":"LAMAI","EmployeeID":2,"OrderDate":"1997/12/19","RequiredDate":"1998/01/02","ShippedDate":"1997/12/26","ShipVia":1,"Freight":"249.9300","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10788,"CustomerID":"QUICK","EmployeeID":1,"OrderDate":"1997/12/22","RequiredDate":"1998/01/19","ShippedDate":"1998/01/19","ShipVia":2,"Freight":"42.7000","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10789,"CustomerID":"FOLIG","EmployeeID":1,"OrderDate":"1997/12/22","RequiredDate":"1998/01/19","ShippedDate":"1997/12/31","ShipVia":2,"Freight":"100.6000","ShipName":"Folies gourmandes","ShipAddress":"184, chaussee de Tournai","ShipCity":"Lille","ShipRegion":null,"ShipPostalCode":"59000","ShipCountry":"France"},{"OrderID":10790,"CustomerID":"GOURL","EmployeeID":6,"OrderDate":"1997/12/22","RequiredDate":"1998/01/19","ShippedDate":"1997/12/26","ShipVia":1,"Freight":"28.2300","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":10791,"CustomerID":"FRANK","EmployeeID":6,"OrderDate":"1997/12/23","RequiredDate":"1998/01/20","ShippedDate":"1998/01/01","ShipVia":2,"Freight":"16.8500","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10792,"CustomerID":"WOLZA","EmployeeID":1,"OrderDate":"1997/12/23","RequiredDate":"1998/01/20","ShippedDate":"1997/12/31","ShipVia":3,"Freight":"23.7900","ShipName":"Wolski Zajazd","ShipAddress":"ul. Filtrowa 68","ShipCity":"Warszawa","ShipRegion":null,"ShipPostalCode":"01-012","ShipCountry":"Poland"},{"OrderID":10793,"CustomerID":"AROUT","EmployeeID":3,"OrderDate":"1997/12/24","RequiredDate":"1998/01/21","ShippedDate":"1998/01/08","ShipVia":3,"Freight":"4.5200","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10794,"CustomerID":"QUEDE","EmployeeID":6,"OrderDate":"1997/12/24","RequiredDate":"1998/01/21","ShippedDate":"1998/01/02","ShipVia":1,"Freight":"21.4900","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10795,"CustomerID":"ERNSH","EmployeeID":8,"OrderDate":"1997/12/24","RequiredDate":"1998/01/21","ShippedDate":"1998/01/20","ShipVia":2,"Freight":"126.6600","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10796,"CustomerID":"HILAA","EmployeeID":3,"OrderDate":"1997/12/25","RequiredDate":"1998/01/22","ShippedDate":"1998/01/14","ShipVia":1,"Freight":"26.5200","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10797,"CustomerID":"DRACD","EmployeeID":7,"OrderDate":"1997/12/25","RequiredDate":"1998/01/22","ShippedDate":"1998/01/05","ShipVia":2,"Freight":"33.3500","ShipName":"Drachenblut Delikatessen","ShipAddress":"Walserweg 21","ShipCity":"Aachen","ShipRegion":null,"ShipPostalCode":"52066","ShipCountry":"Germany"},{"OrderID":10798,"CustomerID":"ISLAT","EmployeeID":2,"OrderDate":"1997/12/26","RequiredDate":"1998/01/23","ShippedDate":"1998/01/05","ShipVia":1,"Freight":"2.3300","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10799,"CustomerID":"KOENE","EmployeeID":9,"OrderDate":"1997/12/26","RequiredDate":"1998/02/06","ShippedDate":"1998/01/05","ShipVia":3,"Freight":"30.7600","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10800,"CustomerID":"SEVES","EmployeeID":1,"OrderDate":"1997/12/26","RequiredDate":"1998/01/23","ShippedDate":"1998/01/05","ShipVia":3,"Freight":"137.4400","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10801,"CustomerID":"BOLID","EmployeeID":4,"OrderDate":"1997/12/29","RequiredDate":"1998/01/26","ShippedDate":"1997/12/31","ShipVia":2,"Freight":"97.0900","ShipName":"Bolido Comidas preparadas","ShipAddress":"C/ Araquil, 67","ShipCity":"Madrid","ShipRegion":null,"ShipPostalCode":"28023","ShipCountry":"Spain"},{"OrderID":10802,"CustomerID":"SIMOB","EmployeeID":4,"OrderDate":"1997/12/29","RequiredDate":"1998/01/26","ShippedDate":"1998/01/02","ShipVia":2,"Freight":"257.2600","ShipName":"Simons bistro","ShipAddress":"Vinb?ltet 34","ShipCity":"Kobenhavn","ShipRegion":null,"ShipPostalCode":"1734","ShipCountry":"Denmark"},{"OrderID":10803,"CustomerID":"WELLI","EmployeeID":4,"OrderDate":"1997/12/30","RequiredDate":"1998/01/27","ShippedDate":"1998/01/06","ShipVia":1,"Freight":"55.2300","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10804,"CustomerID":"SEVES","EmployeeID":6,"OrderDate":"1997/12/30","RequiredDate":"1998/01/27","ShippedDate":"1998/01/07","ShipVia":2,"Freight":"27.3300","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10805,"CustomerID":"THEBI","EmployeeID":2,"OrderDate":"1997/12/30","RequiredDate":"1998/01/27","ShippedDate":"1998/01/09","ShipVia":3,"Freight":"237.3400","ShipName":"The Big Cheese","ShipAddress":"89 Jefferson Way Suite 2","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97201","ShipCountry":"USA"},{"OrderID":10806,"CustomerID":"VICTE","EmployeeID":3,"OrderDate":"1997/12/31","RequiredDate":"1998/01/28","ShippedDate":"1998/01/05","ShipVia":2,"Freight":"22.1100","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10807,"CustomerID":"FRANS","EmployeeID":4,"OrderDate":"1997/12/31","RequiredDate":"1998/01/28","ShippedDate":"1998/01/30","ShipVia":1,"Freight":"1.3600","ShipName":"Franchi S.p.A.","ShipAddress":"Via Monte Bianco 34","ShipCity":"Torino","ShipRegion":null,"ShipPostalCode":"10100","ShipCountry":"Italy"},{"OrderID":10808,"CustomerID":"OLDWO","EmployeeID":2,"OrderDate":"1998/01/01","RequiredDate":"1998/01/29","ShippedDate":"1998/01/09","ShipVia":3,"Freight":"45.5300","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10809,"CustomerID":"WELLI","EmployeeID":7,"OrderDate":"1998/01/01","RequiredDate":"1998/01/29","ShippedDate":"1998/01/07","ShipVia":1,"Freight":"4.8700","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10810,"CustomerID":"LAUGB","EmployeeID":2,"OrderDate":"1998/01/01","RequiredDate":"1998/01/29","ShippedDate":"1998/01/07","ShipVia":3,"Freight":"4.3300","ShipName":"Laughing Bacchus Wine Cellars","ShipAddress":"2319 Elm St.","ShipCity":"Vancouver","ShipRegion":"BC","ShipPostalCode":"V3F 2K1","ShipCountry":"Canada"},{"OrderID":10811,"CustomerID":"LINOD","EmployeeID":8,"OrderDate":"1998/01/02","RequiredDate":"1998/01/30","ShippedDate":"1998/01/08","ShipVia":1,"Freight":"31.2200","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10812,"CustomerID":"REGGC","EmployeeID":5,"OrderDate":"1998/01/02","RequiredDate":"1998/01/30","ShippedDate":"1998/01/12","ShipVia":1,"Freight":"59.7800","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10813,"CustomerID":"RICAR","EmployeeID":1,"OrderDate":"1998/01/05","RequiredDate":"1998/02/02","ShippedDate":"1998/01/09","ShipVia":1,"Freight":"47.3800","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10814,"CustomerID":"VICTE","EmployeeID":3,"OrderDate":"1998/01/05","RequiredDate":"1998/02/02","ShippedDate":"1998/01/14","ShipVia":3,"Freight":"130.9400","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10815,"CustomerID":"SAVEA","EmployeeID":2,"OrderDate":"1998/01/05","RequiredDate":"1998/02/02","ShippedDate":"1998/01/14","ShipVia":3,"Freight":"14.6200","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10816,"CustomerID":"GREAL","EmployeeID":4,"OrderDate":"1998/01/06","RequiredDate":"1998/02/03","ShippedDate":"1998/02/04","ShipVia":2,"Freight":"719.7800","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":10817,"CustomerID":"KOENE","EmployeeID":3,"OrderDate":"1998/01/06","RequiredDate":"1998/01/20","ShippedDate":"1998/01/13","ShipVia":2,"Freight":"306.0700","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10818,"CustomerID":"MAGAA","EmployeeID":7,"OrderDate":"1998/01/07","RequiredDate":"1998/02/04","ShippedDate":"1998/01/12","ShipVia":3,"Freight":"65.4800","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10819,"CustomerID":"CACTU","EmployeeID":2,"OrderDate":"1998/01/07","RequiredDate":"1998/02/04","ShippedDate":"1998/01/16","ShipVia":3,"Freight":"19.7600","ShipName":"Cactus Comidas para llevar","ShipAddress":"Cerrito 333","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10820,"CustomerID":"RATTC","EmployeeID":3,"OrderDate":"1998/01/07","RequiredDate":"1998/02/04","ShippedDate":"1998/01/13","ShipVia":2,"Freight":"37.5200","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10821,"CustomerID":"SPLIR","EmployeeID":1,"OrderDate":"1998/01/08","RequiredDate":"1998/02/05","ShippedDate":"1998/01/15","ShipVia":1,"Freight":"36.6800","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10822,"CustomerID":"TRAIH","EmployeeID":6,"OrderDate":"1998/01/08","RequiredDate":"1998/02/05","ShippedDate":"1998/01/16","ShipVia":3,"Freight":"7.0000","ShipName":"Trail's Head Gourmet Provisioners","ShipAddress":"722 DaVinci Blvd.","ShipCity":"Kirkland","ShipRegion":"WA","ShipPostalCode":"98034","ShipCountry":"USA"},{"OrderID":10823,"CustomerID":"LILAS","EmployeeID":5,"OrderDate":"1998/01/09","RequiredDate":"1998/02/06","ShippedDate":"1998/01/13","ShipVia":2,"Freight":"163.9700","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10824,"CustomerID":"FOLKO","EmployeeID":8,"OrderDate":"1998/01/09","RequiredDate":"1998/02/06","ShippedDate":"1998/01/30","ShipVia":1,"Freight":"1.2300","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10825,"CustomerID":"DRACD","EmployeeID":1,"OrderDate":"1998/01/09","RequiredDate":"1998/02/06","ShippedDate":"1998/01/14","ShipVia":1,"Freight":"79.2500","ShipName":"Drachenblut Delikatessen","ShipAddress":"Walserweg 21","ShipCity":"Aachen","ShipRegion":null,"ShipPostalCode":"52066","ShipCountry":"Germany"},{"OrderID":10826,"CustomerID":"BLONP","EmployeeID":6,"OrderDate":"1998/01/12","RequiredDate":"1998/02/09","ShippedDate":"1998/02/06","ShipVia":1,"Freight":"7.0900","ShipName":"Blondel pere et fils","ShipAddress":"24, place Kleber","ShipCity":"Strasbourg","ShipRegion":null,"ShipPostalCode":"67000","ShipCountry":"France"},{"OrderID":10827,"CustomerID":"BONAP","EmployeeID":1,"OrderDate":"1998/01/12","RequiredDate":"1998/01/26","ShippedDate":"1998/02/06","ShipVia":2,"Freight":"63.5400","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10828,"CustomerID":"RANCH","EmployeeID":9,"OrderDate":"1998/01/13","RequiredDate":"1998/01/27","ShippedDate":"1998/02/04","ShipVia":1,"Freight":"90.8500","ShipName":"Rancho grande","ShipAddress":"Av. del Libertador 900","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10829,"CustomerID":"ISLAT","EmployeeID":9,"OrderDate":"1998/01/13","RequiredDate":"1998/02/10","ShippedDate":"1998/01/23","ShipVia":1,"Freight":"154.7200","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10830,"CustomerID":"TRADH","EmployeeID":4,"OrderDate":"1998/01/13","RequiredDate":"1998/02/24","ShippedDate":"1998/01/21","ShipVia":2,"Freight":"81.8300","ShipName":"Tradicao Hipermercados","ShipAddress":"Av. Ines de Castro, 414","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05634-030","ShipCountry":"Brazil"},{"OrderID":10831,"CustomerID":"SANTG","EmployeeID":3,"OrderDate":"1998/01/14","RequiredDate":"1998/02/11","ShippedDate":"1998/01/23","ShipVia":2,"Freight":"72.1900","ShipName":"Sante Gourmet","ShipAddress":"Erling Skakkes gate 78","ShipCity":"Stavern","ShipRegion":null,"ShipPostalCode":"4110","ShipCountry":"Norway"},{"OrderID":10832,"CustomerID":"LAMAI","EmployeeID":2,"OrderDate":"1998/01/14","RequiredDate":"1998/02/11","ShippedDate":"1998/01/19","ShipVia":2,"Freight":"43.2600","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10833,"CustomerID":"OTTIK","EmployeeID":6,"OrderDate":"1998/01/15","RequiredDate":"1998/02/12","ShippedDate":"1998/01/23","ShipVia":2,"Freight":"71.4900","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":10834,"CustomerID":"TRADH","EmployeeID":1,"OrderDate":"1998/01/15","RequiredDate":"1998/02/12","ShippedDate":"1998/01/19","ShipVia":3,"Freight":"29.7800","ShipName":"Tradicao Hipermercados","ShipAddress":"Av. Ines de Castro, 414","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05634-030","ShipCountry":"Brazil"},{"OrderID":10835,"CustomerID":"ALFKI","EmployeeID":1,"OrderDate":"1998/01/15","RequiredDate":"1998/02/12","ShippedDate":"1998/01/21","ShipVia":3,"Freight":"69.5300","ShipName":"Alfred's Futterkiste","ShipAddress":"Obere Str. 57","ShipCity":"Berlin","ShipRegion":null,"ShipPostalCode":"12209","ShipCountry":"Germany"},{"OrderID":10836,"CustomerID":"ERNSH","EmployeeID":7,"OrderDate":"1998/01/16","RequiredDate":"1998/02/13","ShippedDate":"1998/01/21","ShipVia":1,"Freight":"411.8800","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10837,"CustomerID":"BERGS","EmployeeID":9,"OrderDate":"1998/01/16","RequiredDate":"1998/02/13","ShippedDate":"1998/01/23","ShipVia":3,"Freight":"13.3200","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10838,"CustomerID":"LINOD","EmployeeID":3,"OrderDate":"1998/01/19","RequiredDate":"1998/02/16","ShippedDate":"1998/01/23","ShipVia":3,"Freight":"59.2800","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10839,"CustomerID":"TRADH","EmployeeID":3,"OrderDate":"1998/01/19","RequiredDate":"1998/02/16","ShippedDate":"1998/01/22","ShipVia":3,"Freight":"35.4300","ShipName":"Tradicao Hipermercados","ShipAddress":"Av. Ines de Castro, 414","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05634-030","ShipCountry":"Brazil"},{"OrderID":10840,"CustomerID":"LINOD","EmployeeID":4,"OrderDate":"1998/01/19","RequiredDate":"1998/03/02","ShippedDate":"1998/02/16","ShipVia":2,"Freight":"2.7100","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10841,"CustomerID":"SUPRD","EmployeeID":5,"OrderDate":"1998/01/20","RequiredDate":"1998/02/17","ShippedDate":"1998/01/29","ShipVia":2,"Freight":"424.3000","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10842,"CustomerID":"TORTU","EmployeeID":1,"OrderDate":"1998/01/20","RequiredDate":"1998/02/17","ShippedDate":"1998/01/29","ShipVia":3,"Freight":"54.4200","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10843,"CustomerID":"VICTE","EmployeeID":4,"OrderDate":"1998/01/21","RequiredDate":"1998/02/18","ShippedDate":"1998/01/26","ShipVia":2,"Freight":"9.2600","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10844,"CustomerID":"PICCO","EmployeeID":8,"OrderDate":"1998/01/21","RequiredDate":"1998/02/18","ShippedDate":"1998/01/26","ShipVia":2,"Freight":"25.2200","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":10845,"CustomerID":"QUICK","EmployeeID":8,"OrderDate":"1998/01/21","RequiredDate":"1998/02/04","ShippedDate":"1998/01/30","ShipVia":1,"Freight":"212.9800","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10846,"CustomerID":"SUPRD","EmployeeID":2,"OrderDate":"1998/01/22","RequiredDate":"1998/03/05","ShippedDate":"1998/01/23","ShipVia":3,"Freight":"56.4600","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10847,"CustomerID":"SAVEA","EmployeeID":4,"OrderDate":"1998/01/22","RequiredDate":"1998/02/05","ShippedDate":"1998/02/10","ShipVia":3,"Freight":"487.5700","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10848,"CustomerID":"CONSH","EmployeeID":7,"OrderDate":"1998/01/23","RequiredDate":"1998/02/20","ShippedDate":"1998/01/29","ShipVia":2,"Freight":"38.2400","ShipName":"Consolidated Holdings","ShipAddress":"Berkeley Gardens 12  Brewery","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX1 6LT","ShipCountry":"UK"},{"OrderID":10849,"CustomerID":"KOENE","EmployeeID":9,"OrderDate":"1998/01/23","RequiredDate":"1998/02/20","ShippedDate":"1998/01/30","ShipVia":2,"Freight":"0.5600","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10850,"CustomerID":"VICTE","EmployeeID":1,"OrderDate":"1998/01/23","RequiredDate":"1998/03/06","ShippedDate":"1998/01/30","ShipVia":1,"Freight":"49.1900","ShipName":"Victuailles en stock","ShipAddress":"2, rue du Commerce","ShipCity":"Lyon","ShipRegion":null,"ShipPostalCode":"69004","ShipCountry":"France"},{"OrderID":10851,"CustomerID":"RICAR","EmployeeID":5,"OrderDate":"1998/01/26","RequiredDate":"1998/02/23","ShippedDate":"1998/02/02","ShipVia":1,"Freight":"160.5500","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10852,"CustomerID":"RATTC","EmployeeID":8,"OrderDate":"1998/01/26","RequiredDate":"1998/02/09","ShippedDate":"1998/01/30","ShipVia":1,"Freight":"174.0500","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10853,"CustomerID":"BLAUS","EmployeeID":9,"OrderDate":"1998/01/27","RequiredDate":"1998/02/24","ShippedDate":"1998/02/03","ShipVia":2,"Freight":"53.8300","ShipName":"Blauer See Delikatessen","ShipAddress":"Forsterstr. 57","ShipCity":"Mannheim","ShipRegion":null,"ShipPostalCode":"68306","ShipCountry":"Germany"},{"OrderID":10854,"CustomerID":"ERNSH","EmployeeID":3,"OrderDate":"1998/01/27","RequiredDate":"1998/02/24","ShippedDate":"1998/02/05","ShipVia":2,"Freight":"100.2200","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10855,"CustomerID":"OLDWO","EmployeeID":3,"OrderDate":"1998/01/27","RequiredDate":"1998/02/24","ShippedDate":"1998/02/04","ShipVia":1,"Freight":"170.9700","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10856,"CustomerID":"ANTON","EmployeeID":3,"OrderDate":"1998/01/28","RequiredDate":"1998/02/25","ShippedDate":"1998/02/10","ShipVia":2,"Freight":"58.4300","ShipName":"Antonio Moreno Taqueria","ShipAddress":"Mataderos  2312","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05023","ShipCountry":"Mexico"},{"OrderID":10857,"CustomerID":"BERGS","EmployeeID":8,"OrderDate":"1998/01/28","RequiredDate":"1998/02/25","ShippedDate":"1998/02/06","ShipVia":2,"Freight":"188.8500","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10858,"CustomerID":"LACOR","EmployeeID":2,"OrderDate":"1998/01/29","RequiredDate":"1998/02/26","ShippedDate":"1998/02/03","ShipVia":1,"Freight":"52.5100","ShipName":"La corne d'abondance","ShipAddress":"67, avenue de l'Europe","ShipCity":"Versailles","ShipRegion":null,"ShipPostalCode":"78000","ShipCountry":"France"},{"OrderID":10859,"CustomerID":"FRANK","EmployeeID":1,"OrderDate":"1998/01/29","RequiredDate":"1998/02/26","ShippedDate":"1998/02/02","ShipVia":2,"Freight":"76.1000","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10860,"CustomerID":"FRANR","EmployeeID":3,"OrderDate":"1998/01/29","RequiredDate":"1998/02/26","ShippedDate":"1998/02/04","ShipVia":3,"Freight":"19.2600","ShipName":"France restauration","ShipAddress":"54, rue Royale","ShipCity":"Nantes","ShipRegion":null,"ShipPostalCode":"44000","ShipCountry":"France"},{"OrderID":10861,"CustomerID":"WHITC","EmployeeID":4,"OrderDate":"1998/01/30","RequiredDate":"1998/02/27","ShippedDate":"1998/02/17","ShipVia":2,"Freight":"14.9300","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10862,"CustomerID":"LEHMS","EmployeeID":8,"OrderDate":"1998/01/30","RequiredDate":"1998/03/13","ShippedDate":"1998/02/02","ShipVia":2,"Freight":"53.2300","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10863,"CustomerID":"HILAA","EmployeeID":4,"OrderDate":"1998/02/02","RequiredDate":"1998/03/02","ShippedDate":"1998/02/17","ShipVia":2,"Freight":"30.2600","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10864,"CustomerID":"AROUT","EmployeeID":4,"OrderDate":"1998/02/02","RequiredDate":"1998/03/02","ShippedDate":"1998/02/09","ShipVia":2,"Freight":"3.0400","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10865,"CustomerID":"QUICK","EmployeeID":2,"OrderDate":"1998/02/02","RequiredDate":"1998/02/16","ShippedDate":"1998/02/12","ShipVia":1,"Freight":"348.1400","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10866,"CustomerID":"BERGS","EmployeeID":5,"OrderDate":"1998/02/03","RequiredDate":"1998/03/03","ShippedDate":"1998/02/12","ShipVia":1,"Freight":"109.1100","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10867,"CustomerID":"LONEP","EmployeeID":6,"OrderDate":"1998/02/03","RequiredDate":"1998/03/17","ShippedDate":"1998/02/11","ShipVia":1,"Freight":"1.9300","ShipName":"Lonesome Pine Restaurant","ShipAddress":"89 Chiaroscuro Rd.","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97219","ShipCountry":"USA"},{"OrderID":10868,"CustomerID":"QUEEN","EmployeeID":7,"OrderDate":"1998/02/04","RequiredDate":"1998/03/04","ShippedDate":"1998/02/23","ShipVia":2,"Freight":"191.2700","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10869,"CustomerID":"SEVES","EmployeeID":5,"OrderDate":"1998/02/04","RequiredDate":"1998/03/04","ShippedDate":"1998/02/09","ShipVia":1,"Freight":"143.2800","ShipName":"Seven Seas Imports","ShipAddress":"90 Wadhurst Rd.","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"OX15 4NB","ShipCountry":"UK"},{"OrderID":10870,"CustomerID":"WOLZA","EmployeeID":5,"OrderDate":"1998/02/04","RequiredDate":"1998/03/04","ShippedDate":"1998/02/13","ShipVia":3,"Freight":"12.0400","ShipName":"Wolski Zajazd","ShipAddress":"ul. Filtrowa 68","ShipCity":"Warszawa","ShipRegion":null,"ShipPostalCode":"01-012","ShipCountry":"Poland"},{"OrderID":10871,"CustomerID":"BONAP","EmployeeID":9,"OrderDate":"1998/02/05","RequiredDate":"1998/03/05","ShippedDate":"1998/02/10","ShipVia":2,"Freight":"112.2700","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10872,"CustomerID":"GODOS","EmployeeID":5,"OrderDate":"1998/02/05","RequiredDate":"1998/03/05","ShippedDate":"1998/02/09","ShipVia":2,"Freight":"175.3200","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":10873,"CustomerID":"WILMK","EmployeeID":4,"OrderDate":"1998/02/06","RequiredDate":"1998/03/06","ShippedDate":"1998/02/09","ShipVia":1,"Freight":"0.8200","ShipName":"Wilman Kala","ShipAddress":"Keskuskatu 45","ShipCity":"Helsinki","ShipRegion":null,"ShipPostalCode":"21240","ShipCountry":"Finland"},{"OrderID":10874,"CustomerID":"GODOS","EmployeeID":5,"OrderDate":"1998/02/06","RequiredDate":"1998/03/06","ShippedDate":"1998/02/11","ShipVia":2,"Freight":"19.5800","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":10875,"CustomerID":"BERGS","EmployeeID":4,"OrderDate":"1998/02/06","RequiredDate":"1998/03/06","ShippedDate":"1998/03/03","ShipVia":2,"Freight":"32.3700","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10876,"CustomerID":"BONAP","EmployeeID":7,"OrderDate":"1998/02/09","RequiredDate":"1998/03/09","ShippedDate":"1998/02/12","ShipVia":3,"Freight":"60.4200","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10877,"CustomerID":"RICAR","EmployeeID":1,"OrderDate":"1998/02/09","RequiredDate":"1998/03/09","ShippedDate":"1998/02/19","ShipVia":1,"Freight":"38.0600","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":10878,"CustomerID":"QUICK","EmployeeID":4,"OrderDate":"1998/02/10","RequiredDate":"1998/03/10","ShippedDate":"1998/02/12","ShipVia":1,"Freight":"46.6900","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10879,"CustomerID":"WILMK","EmployeeID":3,"OrderDate":"1998/02/10","RequiredDate":"1998/03/10","ShippedDate":"1998/02/12","ShipVia":3,"Freight":"8.5000","ShipName":"Wilman Kala","ShipAddress":"Keskuskatu 45","ShipCity":"Helsinki","ShipRegion":null,"ShipPostalCode":"21240","ShipCountry":"Finland"},{"OrderID":10880,"CustomerID":"FOLKO","EmployeeID":7,"OrderDate":"1998/02/10","RequiredDate":"1998/03/24","ShippedDate":"1998/02/18","ShipVia":1,"Freight":"88.0100","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10881,"CustomerID":"CACTU","EmployeeID":4,"OrderDate":"1998/02/11","RequiredDate":"1998/03/11","ShippedDate":"1998/02/18","ShipVia":1,"Freight":"2.8400","ShipName":"Cactus Comidas para llevar","ShipAddress":"Cerrito 333","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10882,"CustomerID":"SAVEA","EmployeeID":4,"OrderDate":"1998/02/11","RequiredDate":"1998/03/11","ShippedDate":"1998/02/20","ShipVia":3,"Freight":"23.1000","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10883,"CustomerID":"LONEP","EmployeeID":8,"OrderDate":"1998/02/12","RequiredDate":"1998/03/12","ShippedDate":"1998/02/20","ShipVia":3,"Freight":"0.5300","ShipName":"Lonesome Pine Restaurant","ShipAddress":"89 Chiaroscuro Rd.","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97219","ShipCountry":"USA"},{"OrderID":10884,"CustomerID":"LETSS","EmployeeID":4,"OrderDate":"1998/02/12","RequiredDate":"1998/03/12","ShippedDate":"1998/02/13","ShipVia":2,"Freight":"90.9700","ShipName":"Let's Stop N Shop","ShipAddress":"87 Polk St. Suite 5","ShipCity":"San Francisco","ShipRegion":"CA","ShipPostalCode":"94117","ShipCountry":"USA"},{"OrderID":10885,"CustomerID":"SUPRD","EmployeeID":6,"OrderDate":"1998/02/12","RequiredDate":"1998/03/12","ShippedDate":"1998/02/18","ShipVia":3,"Freight":"5.6400","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10886,"CustomerID":"HANAR","EmployeeID":1,"OrderDate":"1998/02/13","RequiredDate":"1998/03/13","ShippedDate":"1998/03/02","ShipVia":1,"Freight":"4.9900","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10887,"CustomerID":"GALED","EmployeeID":8,"OrderDate":"1998/02/13","RequiredDate":"1998/03/13","ShippedDate":"1998/02/16","ShipVia":3,"Freight":"1.2500","ShipName":"Galeria del gastronomo","ShipAddress":"Rambla de Cataluna, 23","ShipCity":"Barcelona","ShipRegion":null,"ShipPostalCode":"8022","ShipCountry":"Spain"},{"OrderID":10888,"CustomerID":"GODOS","EmployeeID":1,"OrderDate":"1998/02/16","RequiredDate":"1998/03/16","ShippedDate":"1998/02/23","ShipVia":2,"Freight":"51.8700","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":10889,"CustomerID":"RATTC","EmployeeID":9,"OrderDate":"1998/02/16","RequiredDate":"1998/03/16","ShippedDate":"1998/02/23","ShipVia":3,"Freight":"280.6100","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10890,"CustomerID":"DUMON","EmployeeID":7,"OrderDate":"1998/02/16","RequiredDate":"1998/03/16","ShippedDate":"1998/02/18","ShipVia":1,"Freight":"32.7600","ShipName":"Du monde entier","ShipAddress":"67, rue des Cinquante Otages","ShipCity":"Nantes","ShipRegion":null,"ShipPostalCode":"44000","ShipCountry":"France"},{"OrderID":10891,"CustomerID":"LEHMS","EmployeeID":7,"OrderDate":"1998/02/17","RequiredDate":"1998/03/17","ShippedDate":"1998/02/19","ShipVia":2,"Freight":"20.3700","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10892,"CustomerID":"MAISD","EmployeeID":4,"OrderDate":"1998/02/17","RequiredDate":"1998/03/17","ShippedDate":"1998/02/19","ShipVia":2,"Freight":"120.2700","ShipName":"Maison Dewey","ShipAddress":"Rue Joseph-Bens 532","ShipCity":"Bruxelles","ShipRegion":null,"ShipPostalCode":"B-1180","ShipCountry":"Belgium"},{"OrderID":10893,"CustomerID":"KOENE","EmployeeID":9,"OrderDate":"1998/02/18","RequiredDate":"1998/03/18","ShippedDate":"1998/02/20","ShipVia":2,"Freight":"77.7800","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":10894,"CustomerID":"SAVEA","EmployeeID":1,"OrderDate":"1998/02/18","RequiredDate":"1998/03/18","ShippedDate":"1998/02/20","ShipVia":1,"Freight":"116.1300","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10895,"CustomerID":"ERNSH","EmployeeID":3,"OrderDate":"1998/02/18","RequiredDate":"1998/03/18","ShippedDate":"1998/02/23","ShipVia":1,"Freight":"162.7500","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10896,"CustomerID":"MAISD","EmployeeID":7,"OrderDate":"1998/02/19","RequiredDate":"1998/03/19","ShippedDate":"1998/02/27","ShipVia":3,"Freight":"32.4500","ShipName":"Maison Dewey","ShipAddress":"Rue Joseph-Bens 532","ShipCity":"Bruxelles","ShipRegion":null,"ShipPostalCode":"B-1180","ShipCountry":"Belgium"},{"OrderID":10897,"CustomerID":"HUNGO","EmployeeID":3,"OrderDate":"1998/02/19","RequiredDate":"1998/03/19","ShippedDate":"1998/02/25","ShipVia":2,"Freight":"603.5400","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10898,"CustomerID":"OCEAN","EmployeeID":4,"OrderDate":"1998/02/20","RequiredDate":"1998/03/20","ShippedDate":"1998/03/06","ShipVia":2,"Freight":"1.2700","ShipName":"Oceano Atlantico Ltda.","ShipAddress":"Ing. Gustavo Moncada 8585 Piso 20-A","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10899,"CustomerID":"LILAS","EmployeeID":5,"OrderDate":"1998/02/20","RequiredDate":"1998/03/20","ShippedDate":"1998/02/26","ShipVia":3,"Freight":"1.2100","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10900,"CustomerID":"WELLI","EmployeeID":1,"OrderDate":"1998/02/20","RequiredDate":"1998/03/20","ShippedDate":"1998/03/04","ShipVia":2,"Freight":"1.6600","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10901,"CustomerID":"HILAA","EmployeeID":4,"OrderDate":"1998/02/23","RequiredDate":"1998/03/23","ShippedDate":"1998/02/26","ShipVia":1,"Freight":"62.0900","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10902,"CustomerID":"FOLKO","EmployeeID":1,"OrderDate":"1998/02/23","RequiredDate":"1998/03/23","ShippedDate":"1998/03/03","ShipVia":1,"Freight":"44.1500","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10903,"CustomerID":"HANAR","EmployeeID":3,"OrderDate":"1998/02/24","RequiredDate":"1998/03/24","ShippedDate":"1998/03/04","ShipVia":3,"Freight":"36.7100","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10904,"CustomerID":"WHITC","EmployeeID":3,"OrderDate":"1998/02/24","RequiredDate":"1998/03/24","ShippedDate":"1998/02/27","ShipVia":3,"Freight":"162.9500","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":10905,"CustomerID":"WELLI","EmployeeID":9,"OrderDate":"1998/02/24","RequiredDate":"1998/03/24","ShippedDate":"1998/03/06","ShipVia":2,"Freight":"13.7200","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10906,"CustomerID":"WOLZA","EmployeeID":4,"OrderDate":"1998/02/25","RequiredDate":"1998/03/11","ShippedDate":"1998/03/03","ShipVia":3,"Freight":"26.2900","ShipName":"Wolski Zajazd","ShipAddress":"ul. Filtrowa 68","ShipCity":"Warszawa","ShipRegion":null,"ShipPostalCode":"01-012","ShipCountry":"Poland"},{"OrderID":10907,"CustomerID":"SPECD","EmployeeID":6,"OrderDate":"1998/02/25","RequiredDate":"1998/03/25","ShippedDate":"1998/02/27","ShipVia":3,"Freight":"9.1900","ShipName":"Specialites du monde","ShipAddress":"25, rue Lauriston","ShipCity":"Paris","ShipRegion":null,"ShipPostalCode":"75016","ShipCountry":"France"},{"OrderID":10908,"CustomerID":"REGGC","EmployeeID":4,"OrderDate":"1998/02/26","RequiredDate":"1998/03/26","ShippedDate":"1998/03/06","ShipVia":2,"Freight":"32.9600","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10909,"CustomerID":"SANTG","EmployeeID":1,"OrderDate":"1998/02/26","RequiredDate":"1998/03/26","ShippedDate":"1998/03/10","ShipVia":2,"Freight":"53.0500","ShipName":"Sante Gourmet","ShipAddress":"Erling Skakkes gate 78","ShipCity":"Stavern","ShipRegion":null,"ShipPostalCode":"4110","ShipCountry":"Norway"},{"OrderID":10910,"CustomerID":"WILMK","EmployeeID":1,"OrderDate":"1998/02/26","RequiredDate":"1998/03/26","ShippedDate":"1998/03/04","ShipVia":3,"Freight":"38.1100","ShipName":"Wilman Kala","ShipAddress":"Keskuskatu 45","ShipCity":"Helsinki","ShipRegion":null,"ShipPostalCode":"21240","ShipCountry":"Finland"},{"OrderID":10911,"CustomerID":"GODOS","EmployeeID":3,"OrderDate":"1998/02/26","RequiredDate":"1998/03/26","ShippedDate":"1998/03/05","ShipVia":1,"Freight":"38.1900","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":10912,"CustomerID":"HUNGO","EmployeeID":2,"OrderDate":"1998/02/26","RequiredDate":"1998/03/26","ShippedDate":"1998/03/18","ShipVia":2,"Freight":"580.9100","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10913,"CustomerID":"QUEEN","EmployeeID":4,"OrderDate":"1998/02/26","RequiredDate":"1998/03/26","ShippedDate":"1998/03/04","ShipVia":1,"Freight":"33.0500","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10914,"CustomerID":"QUEEN","EmployeeID":6,"OrderDate":"1998/02/27","RequiredDate":"1998/03/27","ShippedDate":"1998/03/02","ShipVia":1,"Freight":"21.1900","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10915,"CustomerID":"TORTU","EmployeeID":2,"OrderDate":"1998/02/27","RequiredDate":"1998/03/27","ShippedDate":"1998/03/02","ShipVia":2,"Freight":"3.5100","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10916,"CustomerID":"RANCH","EmployeeID":1,"OrderDate":"1998/02/27","RequiredDate":"1998/03/27","ShippedDate":"1998/03/09","ShipVia":2,"Freight":"63.7700","ShipName":"Rancho grande","ShipAddress":"Av. del Libertador 900","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10917,"CustomerID":"ROMEY","EmployeeID":4,"OrderDate":"1998/03/02","RequiredDate":"1998/03/30","ShippedDate":"1998/03/11","ShipVia":2,"Freight":"8.2900","ShipName":"Romero y tomillo","ShipAddress":"Gran Via, 1","ShipCity":"Madrid","ShipRegion":null,"ShipPostalCode":"28001","ShipCountry":"Spain"},{"OrderID":10918,"CustomerID":"BOTTM","EmployeeID":3,"OrderDate":"1998/03/02","RequiredDate":"1998/03/30","ShippedDate":"1998/03/11","ShipVia":3,"Freight":"48.8300","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10919,"CustomerID":"LINOD","EmployeeID":2,"OrderDate":"1998/03/02","RequiredDate":"1998/03/30","ShippedDate":"1998/03/04","ShipVia":2,"Freight":"19.8000","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10920,"CustomerID":"AROUT","EmployeeID":4,"OrderDate":"1998/03/03","RequiredDate":"1998/03/31","ShippedDate":"1998/03/09","ShipVia":2,"Freight":"29.6100","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10921,"CustomerID":"VAFFE","EmployeeID":1,"OrderDate":"1998/03/03","RequiredDate":"1998/04/14","ShippedDate":"1998/03/09","ShipVia":1,"Freight":"176.4800","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10922,"CustomerID":"HANAR","EmployeeID":5,"OrderDate":"1998/03/03","RequiredDate":"1998/03/31","ShippedDate":"1998/03/05","ShipVia":3,"Freight":"62.7400","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10923,"CustomerID":"LAMAI","EmployeeID":7,"OrderDate":"1998/03/03","RequiredDate":"1998/04/14","ShippedDate":"1998/03/13","ShipVia":3,"Freight":"68.2600","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":10924,"CustomerID":"BERGS","EmployeeID":3,"OrderDate":"1998/03/04","RequiredDate":"1998/04/01","ShippedDate":"1998/04/08","ShipVia":2,"Freight":"151.5200","ShipName":"Berglunds snabbkop","ShipAddress":"Berguvsvagen  8","ShipCity":"Lulea","ShipRegion":null,"ShipPostalCode":"S-958 22","ShipCountry":"Sweden"},{"OrderID":10925,"CustomerID":"HANAR","EmployeeID":3,"OrderDate":"1998/03/04","RequiredDate":"1998/04/01","ShippedDate":"1998/03/13","ShipVia":1,"Freight":"2.2700","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10926,"CustomerID":"ANATR","EmployeeID":4,"OrderDate":"1998/03/04","RequiredDate":"1998/04/01","ShippedDate":"1998/03/11","ShipVia":3,"Freight":"39.9200","ShipName":"Ana Trujillo Emparedados y helados","ShipAddress":"Avda. de la Constitucion 2222","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05021","ShipCountry":"Mexico"},{"OrderID":10927,"CustomerID":"LACOR","EmployeeID":4,"OrderDate":"1998/03/05","RequiredDate":"1998/04/02","ShippedDate":"1998/04/08","ShipVia":1,"Freight":"19.7900","ShipName":"La corne d'abondance","ShipAddress":"67, avenue de l'Europe","ShipCity":"Versailles","ShipRegion":null,"ShipPostalCode":"78000","ShipCountry":"France"},{"OrderID":10928,"CustomerID":"GALED","EmployeeID":1,"OrderDate":"1998/03/05","RequiredDate":"1998/04/02","ShippedDate":"1998/03/18","ShipVia":1,"Freight":"1.3600","ShipName":"Galeria del gastronomo","ShipAddress":"Rambla de Cataluna, 23","ShipCity":"Barcelona","ShipRegion":null,"ShipPostalCode":"8022","ShipCountry":"Spain"},{"OrderID":10929,"CustomerID":"FRANK","EmployeeID":6,"OrderDate":"1998/03/05","RequiredDate":"1998/04/02","ShippedDate":"1998/03/12","ShipVia":1,"Freight":"33.9300","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":10930,"CustomerID":"SUPRD","EmployeeID":4,"OrderDate":"1998/03/06","RequiredDate":"1998/04/17","ShippedDate":"1998/03/18","ShipVia":3,"Freight":"15.5500","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":10931,"CustomerID":"RICSU","EmployeeID":4,"OrderDate":"1998/03/06","RequiredDate":"1998/03/20","ShippedDate":"1998/03/19","ShipVia":2,"Freight":"13.6000","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":10932,"CustomerID":"BONAP","EmployeeID":8,"OrderDate":"1998/03/06","RequiredDate":"1998/04/03","ShippedDate":"1998/03/24","ShipVia":1,"Freight":"134.6400","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10933,"CustomerID":"ISLAT","EmployeeID":6,"OrderDate":"1998/03/06","RequiredDate":"1998/04/03","ShippedDate":"1998/03/16","ShipVia":3,"Freight":"54.1500","ShipName":"Island Trading","ShipAddress":"Garden House Crowther Way","ShipCity":"Cowes","ShipRegion":"Isle of Wight","ShipPostalCode":"PO31 7PJ","ShipCountry":"UK"},{"OrderID":10934,"CustomerID":"LEHMS","EmployeeID":3,"OrderDate":"1998/03/09","RequiredDate":"1998/04/06","ShippedDate":"1998/03/12","ShipVia":3,"Freight":"32.0100","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":10935,"CustomerID":"WELLI","EmployeeID":4,"OrderDate":"1998/03/09","RequiredDate":"1998/04/06","ShippedDate":"1998/03/18","ShipVia":3,"Freight":"47.5900","ShipName":"Wellington Importadora","ShipAddress":"Rua do Mercado, 12","ShipCity":"Resende","ShipRegion":"SP","ShipPostalCode":"08737-363","ShipCountry":"Brazil"},{"OrderID":10936,"CustomerID":"GREAL","EmployeeID":3,"OrderDate":"1998/03/09","RequiredDate":"1998/04/06","ShippedDate":"1998/03/18","ShipVia":2,"Freight":"33.6800","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":10937,"CustomerID":"CACTU","EmployeeID":7,"OrderDate":"1998/03/10","RequiredDate":"1998/03/24","ShippedDate":"1998/03/13","ShipVia":3,"Freight":"31.5100","ShipName":"Cactus Comidas para llevar","ShipAddress":"Cerrito 333","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10938,"CustomerID":"QUICK","EmployeeID":3,"OrderDate":"1998/03/10","RequiredDate":"1998/04/07","ShippedDate":"1998/03/16","ShipVia":2,"Freight":"31.8900","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10939,"CustomerID":"MAGAA","EmployeeID":2,"OrderDate":"1998/03/10","RequiredDate":"1998/04/07","ShippedDate":"1998/03/13","ShipVia":2,"Freight":"76.3300","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10940,"CustomerID":"BONAP","EmployeeID":8,"OrderDate":"1998/03/11","RequiredDate":"1998/04/08","ShippedDate":"1998/03/23","ShipVia":3,"Freight":"19.7700","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":10941,"CustomerID":"SAVEA","EmployeeID":7,"OrderDate":"1998/03/11","RequiredDate":"1998/04/08","ShippedDate":"1998/03/20","ShipVia":2,"Freight":"400.8100","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10942,"CustomerID":"REGGC","EmployeeID":9,"OrderDate":"1998/03/11","RequiredDate":"1998/04/08","ShippedDate":"1998/03/18","ShipVia":3,"Freight":"17.9500","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":10943,"CustomerID":"BSBEV","EmployeeID":4,"OrderDate":"1998/03/11","RequiredDate":"1998/04/08","ShippedDate":"1998/03/19","ShipVia":2,"Freight":"2.1700","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10944,"CustomerID":"BOTTM","EmployeeID":6,"OrderDate":"1998/03/12","RequiredDate":"1998/03/26","ShippedDate":"1998/03/13","ShipVia":3,"Freight":"52.9200","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10945,"CustomerID":"MORGK","EmployeeID":4,"OrderDate":"1998/03/12","RequiredDate":"1998/04/09","ShippedDate":"1998/03/18","ShipVia":1,"Freight":"10.2200","ShipName":"Morgenstern Gesundkost","ShipAddress":"Heerstr. 22","ShipCity":"Leipzig","ShipRegion":null,"ShipPostalCode":"04179","ShipCountry":"Germany"},{"OrderID":10946,"CustomerID":"VAFFE","EmployeeID":1,"OrderDate":"1998/03/12","RequiredDate":"1998/04/09","ShippedDate":"1998/03/19","ShipVia":2,"Freight":"27.2000","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10947,"CustomerID":"BSBEV","EmployeeID":3,"OrderDate":"1998/03/13","RequiredDate":"1998/04/10","ShippedDate":"1998/03/16","ShipVia":2,"Freight":"3.2600","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":10948,"CustomerID":"GODOS","EmployeeID":3,"OrderDate":"1998/03/13","RequiredDate":"1998/04/10","ShippedDate":"1998/03/19","ShipVia":3,"Freight":"23.3900","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":10949,"CustomerID":"BOTTM","EmployeeID":2,"OrderDate":"1998/03/13","RequiredDate":"1998/04/10","ShippedDate":"1998/03/17","ShipVia":3,"Freight":"74.4400","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10950,"CustomerID":"MAGAA","EmployeeID":1,"OrderDate":"1998/03/16","RequiredDate":"1998/04/13","ShippedDate":"1998/03/23","ShipVia":2,"Freight":"2.5000","ShipName":"Magazzini Alimentari Riuniti","ShipAddress":"Via Ludovico il Moro 22","ShipCity":"Bergamo","ShipRegion":null,"ShipPostalCode":"24100","ShipCountry":"Italy"},{"OrderID":10951,"CustomerID":"RICSU","EmployeeID":9,"OrderDate":"1998/03/16","RequiredDate":"1998/04/27","ShippedDate":"1998/04/07","ShipVia":2,"Freight":"30.8500","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":10952,"CustomerID":"ALFKI","EmployeeID":1,"OrderDate":"1998/03/16","RequiredDate":"1998/04/27","ShippedDate":"1998/03/24","ShipVia":1,"Freight":"40.4200","ShipName":"Alfred's Futterkiste","ShipAddress":"Obere Str. 57","ShipCity":"Berlin","ShipRegion":null,"ShipPostalCode":"12209","ShipCountry":"Germany"},{"OrderID":10953,"CustomerID":"AROUT","EmployeeID":9,"OrderDate":"1998/03/16","RequiredDate":"1998/03/30","ShippedDate":"1998/03/25","ShipVia":2,"Freight":"23.7200","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":10954,"CustomerID":"LINOD","EmployeeID":5,"OrderDate":"1998/03/17","RequiredDate":"1998/04/28","ShippedDate":"1998/03/20","ShipVia":1,"Freight":"27.9100","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":10955,"CustomerID":"FOLKO","EmployeeID":8,"OrderDate":"1998/03/17","RequiredDate":"1998/04/14","ShippedDate":"1998/03/20","ShipVia":2,"Freight":"3.2600","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10956,"CustomerID":"BLAUS","EmployeeID":6,"OrderDate":"1998/03/17","RequiredDate":"1998/04/28","ShippedDate":"1998/03/20","ShipVia":2,"Freight":"44.6500","ShipName":"Blauer See Delikatessen","ShipAddress":"Forsterstr. 57","ShipCity":"Mannheim","ShipRegion":null,"ShipPostalCode":"68306","ShipCountry":"Germany"},{"OrderID":10957,"CustomerID":"HILAA","EmployeeID":8,"OrderDate":"1998/03/18","RequiredDate":"1998/04/15","ShippedDate":"1998/03/27","ShipVia":3,"Freight":"105.3600","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10958,"CustomerID":"OCEAN","EmployeeID":7,"OrderDate":"1998/03/18","RequiredDate":"1998/04/15","ShippedDate":"1998/03/27","ShipVia":2,"Freight":"49.5600","ShipName":"Oceano Atlantico Ltda.","ShipAddress":"Ing. Gustavo Moncada 8585 Piso 20-A","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10959,"CustomerID":"GOURL","EmployeeID":6,"OrderDate":"1998/03/18","RequiredDate":"1998/04/29","ShippedDate":"1998/03/23","ShipVia":2,"Freight":"4.9800","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":10960,"CustomerID":"HILAA","EmployeeID":3,"OrderDate":"1998/03/19","RequiredDate":"1998/04/02","ShippedDate":"1998/04/08","ShipVia":1,"Freight":"2.0800","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10961,"CustomerID":"QUEEN","EmployeeID":8,"OrderDate":"1998/03/19","RequiredDate":"1998/04/16","ShippedDate":"1998/03/30","ShipVia":1,"Freight":"104.4700","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":10962,"CustomerID":"QUICK","EmployeeID":8,"OrderDate":"1998/03/19","RequiredDate":"1998/04/16","ShippedDate":"1998/03/23","ShipVia":2,"Freight":"275.7900","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10963,"CustomerID":"FURIB","EmployeeID":9,"OrderDate":"1998/03/19","RequiredDate":"1998/04/16","ShippedDate":"1998/03/26","ShipVia":3,"Freight":"2.7000","ShipName":"Furia Bacalhau e Frutos do Mar","ShipAddress":"Jardim das rosas n. 32","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1675","ShipCountry":"Portugal"},{"OrderID":10964,"CustomerID":"SPECD","EmployeeID":3,"OrderDate":"1998/03/20","RequiredDate":"1998/04/17","ShippedDate":"1998/03/24","ShipVia":2,"Freight":"87.3800","ShipName":"Specialites du monde","ShipAddress":"25, rue Lauriston","ShipCity":"Paris","ShipRegion":null,"ShipPostalCode":"75016","ShipCountry":"France"},{"OrderID":10965,"CustomerID":"OLDWO","EmployeeID":6,"OrderDate":"1998/03/20","RequiredDate":"1998/04/17","ShippedDate":"1998/03/30","ShipVia":3,"Freight":"144.3800","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":10966,"CustomerID":"CHOPS","EmployeeID":4,"OrderDate":"1998/03/20","RequiredDate":"1998/04/17","ShippedDate":"1998/04/08","ShipVia":1,"Freight":"27.1900","ShipName":"Chop-suey Chinese","ShipAddress":"Hauptstr. 31","ShipCity":"Bern","ShipRegion":null,"ShipPostalCode":"3012","ShipCountry":"Switzerland"},{"OrderID":10967,"CustomerID":"TOMSP","EmployeeID":2,"OrderDate":"1998/03/23","RequiredDate":"1998/04/20","ShippedDate":"1998/04/02","ShipVia":2,"Freight":"62.2200","ShipName":"Toms Spezialitaten","ShipAddress":"Luisenstr. 48","ShipCity":"Munster","ShipRegion":null,"ShipPostalCode":"44087","ShipCountry":"Germany"},{"OrderID":10968,"CustomerID":"ERNSH","EmployeeID":1,"OrderDate":"1998/03/23","RequiredDate":"1998/04/20","ShippedDate":"1998/04/01","ShipVia":3,"Freight":"74.6000","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10969,"CustomerID":"COMMI","EmployeeID":1,"OrderDate":"1998/03/23","RequiredDate":"1998/04/20","ShippedDate":"1998/03/30","ShipVia":2,"Freight":"0.2100","ShipName":"Comercio Mineiro","ShipAddress":"Av. dos Lusiadas, 23","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05432-043","ShipCountry":"Brazil"},{"OrderID":10970,"CustomerID":"BOLID","EmployeeID":9,"OrderDate":"1998/03/24","RequiredDate":"1998/04/07","ShippedDate":"1998/04/24","ShipVia":1,"Freight":"16.1600","ShipName":"Bolido Comidas preparadas","ShipAddress":"C/ Araquil, 67","ShipCity":"Madrid","ShipRegion":null,"ShipPostalCode":"28023","ShipCountry":"Spain"},{"OrderID":10971,"CustomerID":"FRANR","EmployeeID":2,"OrderDate":"1998/03/24","RequiredDate":"1998/04/21","ShippedDate":"1998/04/02","ShipVia":2,"Freight":"121.8200","ShipName":"France restauration","ShipAddress":"54, rue Royale","ShipCity":"Nantes","ShipRegion":null,"ShipPostalCode":"44000","ShipCountry":"France"},{"OrderID":10972,"CustomerID":"LACOR","EmployeeID":4,"OrderDate":"1998/03/24","RequiredDate":"1998/04/21","ShippedDate":"1998/03/26","ShipVia":2,"Freight":"0.0200","ShipName":"La corne d'abondance","ShipAddress":"67, avenue de l'Europe","ShipCity":"Versailles","ShipRegion":null,"ShipPostalCode":"78000","ShipCountry":"France"},{"OrderID":10973,"CustomerID":"LACOR","EmployeeID":6,"OrderDate":"1998/03/24","RequiredDate":"1998/04/21","ShippedDate":"1998/03/27","ShipVia":2,"Freight":"15.1700","ShipName":"La corne d'abondance","ShipAddress":"67, avenue de l'Europe","ShipCity":"Versailles","ShipRegion":null,"ShipPostalCode":"78000","ShipCountry":"France"},{"OrderID":10974,"CustomerID":"SPLIR","EmployeeID":3,"OrderDate":"1998/03/25","RequiredDate":"1998/04/08","ShippedDate":"1998/04/03","ShipVia":3,"Freight":"12.9600","ShipName":"Split Rail Beer & Ale","ShipAddress":"P.O. Box 555","ShipCity":"Lander","ShipRegion":"WY","ShipPostalCode":"82520","ShipCountry":"USA"},{"OrderID":10975,"CustomerID":"BOTTM","EmployeeID":1,"OrderDate":"1998/03/25","RequiredDate":"1998/04/22","ShippedDate":"1998/03/27","ShipVia":3,"Freight":"32.2700","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10976,"CustomerID":"HILAA","EmployeeID":1,"OrderDate":"1998/03/25","RequiredDate":"1998/05/06","ShippedDate":"1998/04/03","ShipVia":1,"Freight":"37.9700","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":10977,"CustomerID":"FOLKO","EmployeeID":8,"OrderDate":"1998/03/26","RequiredDate":"1998/04/23","ShippedDate":"1998/04/10","ShipVia":3,"Freight":"208.5000","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10978,"CustomerID":"MAISD","EmployeeID":9,"OrderDate":"1998/03/26","RequiredDate":"1998/04/23","ShippedDate":"1998/04/23","ShipVia":2,"Freight":"32.8200","ShipName":"Maison Dewey","ShipAddress":"Rue Joseph-Bens 532","ShipCity":"Bruxelles","ShipRegion":null,"ShipPostalCode":"B-1180","ShipCountry":"Belgium"},{"OrderID":10979,"CustomerID":"ERNSH","EmployeeID":8,"OrderDate":"1998/03/26","RequiredDate":"1998/04/23","ShippedDate":"1998/03/31","ShipVia":2,"Freight":"353.0700","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10980,"CustomerID":"FOLKO","EmployeeID":4,"OrderDate":"1998/03/27","RequiredDate":"1998/05/08","ShippedDate":"1998/04/17","ShipVia":1,"Freight":"1.2600","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10981,"CustomerID":"HANAR","EmployeeID":1,"OrderDate":"1998/03/27","RequiredDate":"1998/04/24","ShippedDate":"1998/04/02","ShipVia":2,"Freight":"193.3700","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":10982,"CustomerID":"BOTTM","EmployeeID":2,"OrderDate":"1998/03/27","RequiredDate":"1998/04/24","ShippedDate":"1998/04/08","ShipVia":1,"Freight":"14.0100","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":10983,"CustomerID":"SAVEA","EmployeeID":2,"OrderDate":"1998/03/27","RequiredDate":"1998/04/24","ShippedDate":"1998/04/06","ShipVia":2,"Freight":"657.5400","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10984,"CustomerID":"SAVEA","EmployeeID":1,"OrderDate":"1998/03/30","RequiredDate":"1998/04/27","ShippedDate":"1998/04/03","ShipVia":3,"Freight":"211.2200","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":10985,"CustomerID":"HUNGO","EmployeeID":2,"OrderDate":"1998/03/30","RequiredDate":"1998/04/27","ShippedDate":"1998/04/02","ShipVia":1,"Freight":"91.5100","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":10986,"CustomerID":"OCEAN","EmployeeID":8,"OrderDate":"1998/03/30","RequiredDate":"1998/04/27","ShippedDate":"1998/04/21","ShipVia":2,"Freight":"217.8600","ShipName":"Oceano Atlantico Ltda.","ShipAddress":"Ing. Gustavo Moncada 8585 Piso 20-A","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":10987,"CustomerID":"EASTC","EmployeeID":8,"OrderDate":"1998/03/31","RequiredDate":"1998/04/28","ShippedDate":"1998/04/06","ShipVia":1,"Freight":"185.4800","ShipName":"Eastern Connection","ShipAddress":"35 King George","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX3 6FW","ShipCountry":"UK"},{"OrderID":10988,"CustomerID":"RATTC","EmployeeID":3,"OrderDate":"1998/03/31","RequiredDate":"1998/04/28","ShippedDate":"1998/04/10","ShipVia":2,"Freight":"61.1400","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":10989,"CustomerID":"QUEDE","EmployeeID":2,"OrderDate":"1998/03/31","RequiredDate":"1998/04/28","ShippedDate":"1998/04/02","ShipVia":1,"Freight":"34.7600","ShipName":"Que Delicia","ShipAddress":"Rua da Panificadora, 12","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-673","ShipCountry":"Brazil"},{"OrderID":10990,"CustomerID":"ERNSH","EmployeeID":2,"OrderDate":"1998/04/01","RequiredDate":"1998/05/13","ShippedDate":"1998/04/07","ShipVia":3,"Freight":"117.6100","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":10991,"CustomerID":"QUICK","EmployeeID":1,"OrderDate":"1998/04/01","RequiredDate":"1998/04/29","ShippedDate":"1998/04/07","ShipVia":1,"Freight":"38.5100","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10992,"CustomerID":"THEBI","EmployeeID":1,"OrderDate":"1998/04/01","RequiredDate":"1998/04/29","ShippedDate":"1998/04/03","ShipVia":3,"Freight":"4.2700","ShipName":"The Big Cheese","ShipAddress":"89 Jefferson Way Suite 2","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97201","ShipCountry":"USA"},{"OrderID":10993,"CustomerID":"FOLKO","EmployeeID":7,"OrderDate":"1998/04/01","RequiredDate":"1998/04/29","ShippedDate":"1998/04/10","ShipVia":3,"Freight":"8.8100","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":10994,"CustomerID":"VAFFE","EmployeeID":2,"OrderDate":"1998/04/02","RequiredDate":"1998/04/16","ShippedDate":"1998/04/09","ShipVia":3,"Freight":"65.5300","ShipName":"Vaffeljernet","ShipAddress":"Smagsloget 45","ShipCity":"Arhus","ShipRegion":null,"ShipPostalCode":"8200","ShipCountry":"Denmark"},{"OrderID":10995,"CustomerID":"PERIC","EmployeeID":1,"OrderDate":"1998/04/02","RequiredDate":"1998/04/30","ShippedDate":"1998/04/06","ShipVia":3,"Freight":"46.0000","ShipName":"Pericles Comidas clasicas","ShipAddress":"Calle Dr. Jorge Cash 321","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":10996,"CustomerID":"QUICK","EmployeeID":4,"OrderDate":"1998/04/02","RequiredDate":"1998/04/30","ShippedDate":"1998/04/10","ShipVia":2,"Freight":"1.1200","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":10997,"CustomerID":"LILAS","EmployeeID":8,"OrderDate":"1998/04/03","RequiredDate":"1998/05/15","ShippedDate":"1998/04/13","ShipVia":2,"Freight":"73.9100","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":10998,"CustomerID":"WOLZA","EmployeeID":8,"OrderDate":"1998/04/03","RequiredDate":"1998/04/17","ShippedDate":"1998/04/17","ShipVia":2,"Freight":"20.3100","ShipName":"Wolski Zajazd","ShipAddress":"ul. Filtrowa 68","ShipCity":"Warszawa","ShipRegion":null,"ShipPostalCode":"01-012","ShipCountry":"Poland"},{"OrderID":10999,"CustomerID":"OTTIK","EmployeeID":6,"OrderDate":"1998/04/03","RequiredDate":"1998/05/01","ShippedDate":"1998/04/10","ShipVia":2,"Freight":"96.3500","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":11000,"CustomerID":"RATTC","EmployeeID":2,"OrderDate":"1998/04/06","RequiredDate":"1998/05/04","ShippedDate":"1998/04/14","ShipVia":3,"Freight":"55.1200","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"},{"OrderID":11001,"CustomerID":"FOLKO","EmployeeID":2,"OrderDate":"1998/04/06","RequiredDate":"1998/05/04","ShippedDate":"1998/04/14","ShipVia":2,"Freight":"197.3000","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":11002,"CustomerID":"SAVEA","EmployeeID":4,"OrderDate":"1998/04/06","RequiredDate":"1998/05/04","ShippedDate":"1998/04/16","ShipVia":1,"Freight":"141.1600","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":11003,"CustomerID":"THECR","EmployeeID":3,"OrderDate":"1998/04/06","RequiredDate":"1998/05/04","ShippedDate":"1998/04/08","ShipVia":3,"Freight":"14.9100","ShipName":"The Cracker Box","ShipAddress":"55 Grizzly Peak Rd.","ShipCity":"Butte","ShipRegion":"MT","ShipPostalCode":"59801","ShipCountry":"USA"},{"OrderID":11004,"CustomerID":"MAISD","EmployeeID":3,"OrderDate":"1998/04/07","RequiredDate":"1998/05/05","ShippedDate":"1998/04/20","ShipVia":1,"Freight":"44.8400","ShipName":"Maison Dewey","ShipAddress":"Rue Joseph-Bens 532","ShipCity":"Bruxelles","ShipRegion":null,"ShipPostalCode":"B-1180","ShipCountry":"Belgium"},{"OrderID":11005,"CustomerID":"WILMK","EmployeeID":2,"OrderDate":"1998/04/07","RequiredDate":"1998/05/05","ShippedDate":"1998/04/10","ShipVia":1,"Freight":"0.7500","ShipName":"Wilman Kala","ShipAddress":"Keskuskatu 45","ShipCity":"Helsinki","ShipRegion":null,"ShipPostalCode":"21240","ShipCountry":"Finland"},{"OrderID":11006,"CustomerID":"GREAL","EmployeeID":3,"OrderDate":"1998/04/07","RequiredDate":"1998/05/05","ShippedDate":"1998/04/15","ShipVia":2,"Freight":"25.1900","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":11007,"CustomerID":"PRINI","EmployeeID":8,"OrderDate":"1998/04/08","RequiredDate":"1998/05/06","ShippedDate":"1998/04/13","ShipVia":2,"Freight":"202.2400","ShipName":"Princesa Isabel Vinhos","ShipAddress":"Estrada da saude n. 58","ShipCity":"Lisboa","ShipRegion":null,"ShipPostalCode":"1756","ShipCountry":"Portugal"},{"OrderID":11008,"CustomerID":"ERNSH","EmployeeID":7,"OrderDate":"1998/04/08","RequiredDate":"1998/05/06","ShippedDate":null,"ShipVia":3,"Freight":"79.4600","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":11009,"CustomerID":"GODOS","EmployeeID":2,"OrderDate":"1998/04/08","RequiredDate":"1998/05/06","ShippedDate":"1998/04/10","ShipVia":1,"Freight":"59.1100","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":11010,"CustomerID":"REGGC","EmployeeID":2,"OrderDate":"1998/04/09","RequiredDate":"1998/05/07","ShippedDate":"1998/04/21","ShipVia":2,"Freight":"28.7100","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":11011,"CustomerID":"ALFKI","EmployeeID":3,"OrderDate":"1998/04/09","RequiredDate":"1998/05/07","ShippedDate":"1998/04/13","ShipVia":1,"Freight":"1.2100","ShipName":"Alfred's Futterkiste","ShipAddress":"Obere Str. 57","ShipCity":"Berlin","ShipRegion":null,"ShipPostalCode":"12209","ShipCountry":"Germany"},{"OrderID":11012,"CustomerID":"FRANK","EmployeeID":1,"OrderDate":"1998/04/09","RequiredDate":"1998/04/23","ShippedDate":"1998/04/17","ShipVia":3,"Freight":"242.9500","ShipName":"Frankenversand","ShipAddress":"Berliner Platz 43","ShipCity":"Munchen","ShipRegion":null,"ShipPostalCode":"80805","ShipCountry":"Germany"},{"OrderID":11013,"CustomerID":"ROMEY","EmployeeID":2,"OrderDate":"1998/04/09","RequiredDate":"1998/05/07","ShippedDate":"1998/04/10","ShipVia":1,"Freight":"32.9900","ShipName":"Romero y tomillo","ShipAddress":"Gran Via, 1","ShipCity":"Madrid","ShipRegion":null,"ShipPostalCode":"28001","ShipCountry":"Spain"},{"OrderID":11014,"CustomerID":"LINOD","EmployeeID":2,"OrderDate":"1998/04/10","RequiredDate":"1998/05/08","ShippedDate":"1998/04/15","ShipVia":3,"Freight":"23.6000","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":11015,"CustomerID":"SANTG","EmployeeID":2,"OrderDate":"1998/04/10","RequiredDate":"1998/04/24","ShippedDate":"1998/04/20","ShipVia":2,"Freight":"4.6200","ShipName":"Sante Gourmet","ShipAddress":"Erling Skakkes gate 78","ShipCity":"Stavern","ShipRegion":null,"ShipPostalCode":"4110","ShipCountry":"Norway"},{"OrderID":11016,"CustomerID":"AROUT","EmployeeID":9,"OrderDate":"1998/04/10","RequiredDate":"1998/05/08","ShippedDate":"1998/04/13","ShipVia":2,"Freight":"33.8000","ShipName":"Around the Horn","ShipAddress":"Brook Farm Stratford St. Mary","ShipCity":"Colchester","ShipRegion":"Essex","ShipPostalCode":"CO7 6JX","ShipCountry":"UK"},{"OrderID":11017,"CustomerID":"ERNSH","EmployeeID":9,"OrderDate":"1998/04/13","RequiredDate":"1998/05/11","ShippedDate":"1998/04/20","ShipVia":2,"Freight":"754.2600","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":11018,"CustomerID":"LONEP","EmployeeID":4,"OrderDate":"1998/04/13","RequiredDate":"1998/05/11","ShippedDate":"1998/04/16","ShipVia":2,"Freight":"11.6500","ShipName":"Lonesome Pine Restaurant","ShipAddress":"89 Chiaroscuro Rd.","ShipCity":"Portland","ShipRegion":"OR","ShipPostalCode":"97219","ShipCountry":"USA"},{"OrderID":11019,"CustomerID":"RANCH","EmployeeID":6,"OrderDate":"1998/04/13","RequiredDate":"1998/05/11","ShippedDate":null,"ShipVia":3,"Freight":"3.1700","ShipName":"Rancho grande","ShipAddress":"Av. del Libertador 900","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":11020,"CustomerID":"OTTIK","EmployeeID":2,"OrderDate":"1998/04/14","RequiredDate":"1998/05/12","ShippedDate":"1998/04/16","ShipVia":2,"Freight":"43.3000","ShipName":"Ottilies Kaseladen","ShipAddress":"Mehrheimerstr. 369","ShipCity":"Koln","ShipRegion":null,"ShipPostalCode":"50739","ShipCountry":"Germany"},{"OrderID":11021,"CustomerID":"QUICK","EmployeeID":3,"OrderDate":"1998/04/14","RequiredDate":"1998/05/12","ShippedDate":"1998/04/21","ShipVia":1,"Freight":"297.1800","ShipName":"QUICK-Stop","ShipAddress":"Taucherstra?e 10","ShipCity":"Cunewalde","ShipRegion":null,"ShipPostalCode":"01307","ShipCountry":"Germany"},{"OrderID":11022,"CustomerID":"HANAR","EmployeeID":9,"OrderDate":"1998/04/14","RequiredDate":"1998/05/12","ShippedDate":"1998/05/04","ShipVia":2,"Freight":"6.2700","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":11023,"CustomerID":"BSBEV","EmployeeID":1,"OrderDate":"1998/04/14","RequiredDate":"1998/04/28","ShippedDate":"1998/04/24","ShipVia":2,"Freight":"123.8300","ShipName":"B's Beverages","ShipAddress":"Fauntleroy Circus","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"EC2 5NT","ShipCountry":"UK"},{"OrderID":11024,"CustomerID":"EASTC","EmployeeID":4,"OrderDate":"1998/04/15","RequiredDate":"1998/05/13","ShippedDate":"1998/04/20","ShipVia":1,"Freight":"74.3600","ShipName":"Eastern Connection","ShipAddress":"35 King George","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX3 6FW","ShipCountry":"UK"},{"OrderID":11025,"CustomerID":"WARTH","EmployeeID":6,"OrderDate":"1998/04/15","RequiredDate":"1998/05/13","ShippedDate":"1998/04/24","ShipVia":3,"Freight":"29.1700","ShipName":"Wartian Herkku","ShipAddress":"Torikatu 38","ShipCity":"Oulu","ShipRegion":null,"ShipPostalCode":"90110","ShipCountry":"Finland"},{"OrderID":11026,"CustomerID":"FRANS","EmployeeID":4,"OrderDate":"1998/04/15","RequiredDate":"1998/05/13","ShippedDate":"1998/04/28","ShipVia":1,"Freight":"47.0900","ShipName":"Franchi S.p.A.","ShipAddress":"Via Monte Bianco 34","ShipCity":"Torino","ShipRegion":null,"ShipPostalCode":"10100","ShipCountry":"Italy"},{"OrderID":11027,"CustomerID":"BOTTM","EmployeeID":1,"OrderDate":"1998/04/16","RequiredDate":"1998/05/14","ShippedDate":"1998/04/20","ShipVia":1,"Freight":"52.5200","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":11028,"CustomerID":"KOENE","EmployeeID":2,"OrderDate":"1998/04/16","RequiredDate":"1998/05/14","ShippedDate":"1998/04/22","ShipVia":1,"Freight":"29.5900","ShipName":"Koniglich Essen","ShipAddress":"Maubelstr. 90","ShipCity":"Brandenburg","ShipRegion":null,"ShipPostalCode":"14776","ShipCountry":"Germany"},{"OrderID":11029,"CustomerID":"CHOPS","EmployeeID":4,"OrderDate":"1998/04/16","RequiredDate":"1998/05/14","ShippedDate":"1998/04/27","ShipVia":1,"Freight":"47.8400","ShipName":"Chop-suey Chinese","ShipAddress":"Hauptstr. 31","ShipCity":"Bern","ShipRegion":null,"ShipPostalCode":"3012","ShipCountry":"Switzerland"},{"OrderID":11030,"CustomerID":"SAVEA","EmployeeID":7,"OrderDate":"1998/04/17","RequiredDate":"1998/05/15","ShippedDate":"1998/04/27","ShipVia":2,"Freight":"830.7500","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":11031,"CustomerID":"SAVEA","EmployeeID":6,"OrderDate":"1998/04/17","RequiredDate":"1998/05/15","ShippedDate":"1998/04/24","ShipVia":2,"Freight":"227.2200","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":11032,"CustomerID":"WHITC","EmployeeID":2,"OrderDate":"1998/04/17","RequiredDate":"1998/05/15","ShippedDate":"1998/04/23","ShipVia":3,"Freight":"606.1900","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":11033,"CustomerID":"RICSU","EmployeeID":7,"OrderDate":"1998/04/17","RequiredDate":"1998/05/15","ShippedDate":"1998/04/23","ShipVia":3,"Freight":"84.7400","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":11034,"CustomerID":"OLDWO","EmployeeID":8,"OrderDate":"1998/04/20","RequiredDate":"1998/06/01","ShippedDate":"1998/04/27","ShipVia":1,"Freight":"40.3200","ShipName":"Old World Delicatessen","ShipAddress":"2743 Bering St.","ShipCity":"Anchorage","ShipRegion":"AK","ShipPostalCode":"99508","ShipCountry":"USA"},{"OrderID":11035,"CustomerID":"SUPRD","EmployeeID":2,"OrderDate":"1998/04/20","RequiredDate":"1998/05/18","ShippedDate":"1998/04/24","ShipVia":2,"Freight":"0.1700","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":11036,"CustomerID":"DRACD","EmployeeID":8,"OrderDate":"1998/04/20","RequiredDate":"1998/05/18","ShippedDate":"1998/04/22","ShipVia":3,"Freight":"149.4700","ShipName":"Drachenblut Delikatessen","ShipAddress":"Walserweg 21","ShipCity":"Aachen","ShipRegion":null,"ShipPostalCode":"52066","ShipCountry":"Germany"},{"OrderID":11037,"CustomerID":"GODOS","EmployeeID":7,"OrderDate":"1998/04/21","RequiredDate":"1998/05/19","ShippedDate":"1998/04/27","ShipVia":1,"Freight":"3.2000","ShipName":"Godos Cocina Tipica","ShipAddress":"C/ Romero, 33","ShipCity":"Sevilla","ShipRegion":null,"ShipPostalCode":"41101","ShipCountry":"Spain"},{"OrderID":11038,"CustomerID":"SUPRD","EmployeeID":1,"OrderDate":"1998/04/21","RequiredDate":"1998/05/19","ShippedDate":"1998/04/30","ShipVia":2,"Freight":"29.5900","ShipName":"Supremes delices","ShipAddress":"Boulevard Tirou, 255","ShipCity":"Charleroi","ShipRegion":null,"ShipPostalCode":"B-6000","ShipCountry":"Belgium"},{"OrderID":11039,"CustomerID":"LINOD","EmployeeID":1,"OrderDate":"1998/04/21","RequiredDate":"1998/05/19","ShippedDate":null,"ShipVia":2,"Freight":"65.0000","ShipName":"LINO-Delicateses","ShipAddress":"Ave. 5 de Mayo Porlamar","ShipCity":"I. de Margarita","ShipRegion":"Nueva Esparta","ShipPostalCode":"4980","ShipCountry":"Venezuela"},{"OrderID":11040,"CustomerID":"GREAL","EmployeeID":4,"OrderDate":"1998/04/22","RequiredDate":"1998/05/20","ShippedDate":null,"ShipVia":3,"Freight":"18.8400","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":11041,"CustomerID":"CHOPS","EmployeeID":3,"OrderDate":"1998/04/22","RequiredDate":"1998/05/20","ShippedDate":"1998/04/28","ShipVia":2,"Freight":"48.2200","ShipName":"Chop-suey Chinese","ShipAddress":"Hauptstr. 31","ShipCity":"Bern","ShipRegion":null,"ShipPostalCode":"3012","ShipCountry":"Switzerland"},{"OrderID":11042,"CustomerID":"COMMI","EmployeeID":2,"OrderDate":"1998/04/22","RequiredDate":"1998/05/06","ShippedDate":"1998/05/01","ShipVia":1,"Freight":"29.9900","ShipName":"Comercio Mineiro","ShipAddress":"Av. dos Lusiadas, 23","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05432-043","ShipCountry":"Brazil"},{"OrderID":11043,"CustomerID":"SPECD","EmployeeID":5,"OrderDate":"1998/04/22","RequiredDate":"1998/05/20","ShippedDate":"1998/04/29","ShipVia":2,"Freight":"8.8000","ShipName":"Specialites du monde","ShipAddress":"25, rue Lauriston","ShipCity":"Paris","ShipRegion":null,"ShipPostalCode":"75016","ShipCountry":"France"},{"OrderID":11044,"CustomerID":"WOLZA","EmployeeID":4,"OrderDate":"1998/04/23","RequiredDate":"1998/05/21","ShippedDate":"1998/05/01","ShipVia":1,"Freight":"8.7200","ShipName":"Wolski Zajazd","ShipAddress":"ul. Filtrowa 68","ShipCity":"Warszawa","ShipRegion":null,"ShipPostalCode":"01-012","ShipCountry":"Poland"},{"OrderID":11045,"CustomerID":"BOTTM","EmployeeID":6,"OrderDate":"1998/04/23","RequiredDate":"1998/05/21","ShippedDate":null,"ShipVia":2,"Freight":"70.5800","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":11046,"CustomerID":"WANDK","EmployeeID":8,"OrderDate":"1998/04/23","RequiredDate":"1998/05/21","ShippedDate":"1998/04/24","ShipVia":2,"Freight":"71.6400","ShipName":"Die Wandernde Kuh","ShipAddress":"Adenauerallee 900","ShipCity":"Stuttgart","ShipRegion":null,"ShipPostalCode":"70563","ShipCountry":"Germany"},{"OrderID":11047,"CustomerID":"EASTC","EmployeeID":7,"OrderDate":"1998/04/24","RequiredDate":"1998/05/22","ShippedDate":"1998/05/01","ShipVia":3,"Freight":"46.6200","ShipName":"Eastern Connection","ShipAddress":"35 King George","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX3 6FW","ShipCountry":"UK"},{"OrderID":11048,"CustomerID":"BOTTM","EmployeeID":7,"OrderDate":"1998/04/24","RequiredDate":"1998/05/22","ShippedDate":"1998/04/30","ShipVia":3,"Freight":"24.1200","ShipName":"Bottom-Dollar Markets","ShipAddress":"23 Tsawassen Blvd.","ShipCity":"Tsawassen","ShipRegion":"BC","ShipPostalCode":"T2F 8M4","ShipCountry":"Canada"},{"OrderID":11049,"CustomerID":"GOURL","EmployeeID":3,"OrderDate":"1998/04/24","RequiredDate":"1998/05/22","ShippedDate":"1998/05/04","ShipVia":1,"Freight":"8.3400","ShipName":"Gourmet Lanchonetes","ShipAddress":"Av. Brasil, 442","ShipCity":"Campinas","ShipRegion":"SP","ShipPostalCode":"04876-786","ShipCountry":"Brazil"},{"OrderID":11050,"CustomerID":"FOLKO","EmployeeID":8,"OrderDate":"1998/04/27","RequiredDate":"1998/05/25","ShippedDate":"1998/05/05","ShipVia":2,"Freight":"59.4100","ShipName":"Folk och fa HB","ShipAddress":"Akergatan 24","ShipCity":"Bracke","ShipRegion":null,"ShipPostalCode":"S-844 67","ShipCountry":"Sweden"},{"OrderID":11051,"CustomerID":"LAMAI","EmployeeID":7,"OrderDate":"1998/04/27","RequiredDate":"1998/05/25","ShippedDate":null,"ShipVia":3,"Freight":"2.7900","ShipName":"La maison d'Asie","ShipAddress":"1 rue Alsace-Lorraine","ShipCity":"Toulouse","ShipRegion":null,"ShipPostalCode":"31000","ShipCountry":"France"},{"OrderID":11052,"CustomerID":"HANAR","EmployeeID":3,"OrderDate":"1998/04/27","RequiredDate":"1998/05/25","ShippedDate":"1998/05/01","ShipVia":1,"Freight":"67.2600","ShipName":"Hanari Carnes","ShipAddress":"Rua do Paco, 67","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"05454-876","ShipCountry":"Brazil"},{"OrderID":11053,"CustomerID":"PICCO","EmployeeID":2,"OrderDate":"1998/04/27","RequiredDate":"1998/05/25","ShippedDate":"1998/04/29","ShipVia":2,"Freight":"53.0500","ShipName":"Piccolo und mehr","ShipAddress":"Geislweg 14","ShipCity":"Salzburg","ShipRegion":null,"ShipPostalCode":"5020","ShipCountry":"Austria"},{"OrderID":11054,"CustomerID":"CACTU","EmployeeID":8,"OrderDate":"1998/04/28","RequiredDate":"1998/05/26","ShippedDate":null,"ShipVia":1,"Freight":"0.3300","ShipName":"Cactus Comidas para llevar","ShipAddress":"Cerrito 333","ShipCity":"Buenos Aires","ShipRegion":null,"ShipPostalCode":"1010","ShipCountry":"Argentina"},{"OrderID":11055,"CustomerID":"HILAA","EmployeeID":7,"OrderDate":"1998/04/28","RequiredDate":"1998/05/26","ShippedDate":"1998/05/05","ShipVia":2,"Freight":"120.9200","ShipName":"HILARION-Abastos","ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35","ShipCity":"San Cristobal","ShipRegion":"Tachira","ShipPostalCode":"5022","ShipCountry":"Venezuela"},{"OrderID":11056,"CustomerID":"EASTC","EmployeeID":8,"OrderDate":"1998/04/28","RequiredDate":"1998/05/12","ShippedDate":"1998/05/01","ShipVia":2,"Freight":"278.9600","ShipName":"Eastern Connection","ShipAddress":"35 King George","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"WX3 6FW","ShipCountry":"UK"},{"OrderID":11057,"CustomerID":"NORTS","EmployeeID":3,"OrderDate":"1998/04/29","RequiredDate":"1998/05/27","ShippedDate":"1998/05/01","ShipVia":3,"Freight":"4.1300","ShipName":"North/South","ShipAddress":"South House 300 Queensbridge","ShipCity":"London","ShipRegion":null,"ShipPostalCode":"SW7 1RZ","ShipCountry":"UK"},{"OrderID":11058,"CustomerID":"BLAUS","EmployeeID":9,"OrderDate":"1998/04/29","RequiredDate":"1998/05/27","ShippedDate":null,"ShipVia":3,"Freight":"31.1400","ShipName":"Blauer See Delikatessen","ShipAddress":"Forsterstr. 57","ShipCity":"Mannheim","ShipRegion":null,"ShipPostalCode":"68306","ShipCountry":"Germany"},{"OrderID":11059,"CustomerID":"RICAR","EmployeeID":2,"OrderDate":"1998/04/29","RequiredDate":"1998/06/10","ShippedDate":null,"ShipVia":2,"Freight":"85.8000","ShipName":"Ricardo Adocicados","ShipAddress":"Av. Copacabana, 267","ShipCity":"Rio de Janeiro","ShipRegion":"RJ","ShipPostalCode":"02389-890","ShipCountry":"Brazil"},{"OrderID":11060,"CustomerID":"FRANS","EmployeeID":2,"OrderDate":"1998/04/30","RequiredDate":"1998/05/28","ShippedDate":"1998/05/04","ShipVia":2,"Freight":"10.9800","ShipName":"Franchi S.p.A.","ShipAddress":"Via Monte Bianco 34","ShipCity":"Torino","ShipRegion":null,"ShipPostalCode":"10100","ShipCountry":"Italy"},{"OrderID":11061,"CustomerID":"GREAL","EmployeeID":4,"OrderDate":"1998/04/30","RequiredDate":"1998/06/11","ShippedDate":null,"ShipVia":3,"Freight":"14.0100","ShipName":"Great Lakes Food Market","ShipAddress":"2732 Baker Blvd.","ShipCity":"Eugene","ShipRegion":"OR","ShipPostalCode":"97403","ShipCountry":"USA"},{"OrderID":11062,"CustomerID":"REGGC","EmployeeID":4,"OrderDate":"1998/04/30","RequiredDate":"1998/05/28","ShippedDate":null,"ShipVia":2,"Freight":"29.9300","ShipName":"Reggiani Caseifici","ShipAddress":"Strada Provinciale 124","ShipCity":"Reggio Emilia","ShipRegion":null,"ShipPostalCode":"42100","ShipCountry":"Italy"},{"OrderID":11063,"CustomerID":"HUNGO","EmployeeID":3,"OrderDate":"1998/04/30","RequiredDate":"1998/05/28","ShippedDate":"1998/05/06","ShipVia":2,"Freight":"81.7300","ShipName":"Hungry Owl All-Night Grocers","ShipAddress":"8 Johnstown Road","ShipCity":"Cork","ShipRegion":"Co. Cork","ShipPostalCode":null,"ShipCountry":"Ireland"},{"OrderID":11064,"CustomerID":"SAVEA","EmployeeID":1,"OrderDate":"1998/05/01","RequiredDate":"1998/05/29","ShippedDate":"1998/05/04","ShipVia":1,"Freight":"30.0900","ShipName":"Save-a-lot Markets","ShipAddress":"187 Suffolk Ln.","ShipCity":"Boise","ShipRegion":"ID","ShipPostalCode":"83720","ShipCountry":"USA"},{"OrderID":11065,"CustomerID":"LILAS","EmployeeID":8,"OrderDate":"1998/05/01","RequiredDate":"1998/05/29","ShippedDate":null,"ShipVia":1,"Freight":"12.9100","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":11066,"CustomerID":"WHITC","EmployeeID":7,"OrderDate":"1998/05/01","RequiredDate":"1998/05/29","ShippedDate":"1998/05/04","ShipVia":2,"Freight":"44.7200","ShipName":"White Clover Markets","ShipAddress":"1029 - 12th Ave. S.","ShipCity":"Seattle","ShipRegion":"WA","ShipPostalCode":"98124","ShipCountry":"USA"},{"OrderID":11067,"CustomerID":"DRACD","EmployeeID":1,"OrderDate":"1998/05/04","RequiredDate":"1998/05/18","ShippedDate":"1998/05/06","ShipVia":2,"Freight":"7.9800","ShipName":"Drachenblut Delikatessen","ShipAddress":"Walserweg 21","ShipCity":"Aachen","ShipRegion":null,"ShipPostalCode":"52066","ShipCountry":"Germany"},{"OrderID":11068,"CustomerID":"QUEEN","EmployeeID":8,"OrderDate":"1998/05/04","RequiredDate":"1998/06/01","ShippedDate":null,"ShipVia":2,"Freight":"81.7500","ShipName":"Queen Cozinha","ShipAddress":"Alameda dos Canarios, 891","ShipCity":"Sao Paulo","ShipRegion":"SP","ShipPostalCode":"05487-020","ShipCountry":"Brazil"},{"OrderID":11069,"CustomerID":"TORTU","EmployeeID":1,"OrderDate":"1998/05/04","RequiredDate":"1998/06/01","ShippedDate":"1998/05/06","ShipVia":2,"Freight":"15.6700","ShipName":"Tortuga Restaurante","ShipAddress":"Avda. Azteca 123","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":11070,"CustomerID":"LEHMS","EmployeeID":2,"OrderDate":"1998/05/05","RequiredDate":"1998/06/02","ShippedDate":null,"ShipVia":1,"Freight":"136.0000","ShipName":"Lehmanns Marktstand","ShipAddress":"Magazinweg 7","ShipCity":"Frankfurt a.M.","ShipRegion":null,"ShipPostalCode":"60528","ShipCountry":"Germany"},{"OrderID":11071,"CustomerID":"LILAS","EmployeeID":1,"OrderDate":"1998/05/05","RequiredDate":"1998/06/02","ShippedDate":null,"ShipVia":1,"Freight":"0.9300","ShipName":"LILA-Supermercado","ShipAddress":"Carrera 52 con Ave. Bolivar #65-98 Llano Largo","ShipCity":"Barquisimeto","ShipRegion":"Lara","ShipPostalCode":"3508","ShipCountry":"Venezuela"},{"OrderID":11072,"CustomerID":"ERNSH","EmployeeID":4,"OrderDate":"1998/05/05","RequiredDate":"1998/06/02","ShippedDate":null,"ShipVia":2,"Freight":"258.6400","ShipName":"Ernst Handel","ShipAddress":"Kirchgasse 6","ShipCity":"Graz","ShipRegion":null,"ShipPostalCode":"8010","ShipCountry":"Austria"},{"OrderID":11073,"CustomerID":"PERIC","EmployeeID":2,"OrderDate":"1998/05/05","RequiredDate":"1998/06/02","ShippedDate":null,"ShipVia":2,"Freight":"24.9500","ShipName":"Pericles Comidas clasicas","ShipAddress":"Calle Dr. Jorge Cash 321","ShipCity":"Mexico D.F.","ShipRegion":null,"ShipPostalCode":"05033","ShipCountry":"Mexico"},{"OrderID":11074,"CustomerID":"SIMOB","EmployeeID":7,"OrderDate":"1998/05/06","RequiredDate":"1998/06/03","ShippedDate":null,"ShipVia":2,"Freight":"18.4400","ShipName":"Simons bistro","ShipAddress":"Vinb?ltet 34","ShipCity":"Kobenhavn","ShipRegion":null,"ShipPostalCode":"1734","ShipCountry":"Denmark"},{"OrderID":11075,"CustomerID":"RICSU","EmployeeID":8,"OrderDate":"1998/05/06","RequiredDate":"1998/06/03","ShippedDate":null,"ShipVia":2,"Freight":"6.1900","ShipName":"Richter Supermarkt","ShipAddress":"Starenweg 5","ShipCity":"Geneve","ShipRegion":null,"ShipPostalCode":"1204","ShipCountry":"Switzerland"},{"OrderID":11076,"CustomerID":"BONAP","EmployeeID":4,"OrderDate":"1998/05/06","RequiredDate":"1998/06/03","ShippedDate":null,"ShipVia":2,"Freight":"38.2800","ShipName":"Bon app'","ShipAddress":"12, rue des Bouchers","ShipCity":"Marseille","ShipRegion":null,"ShipPostalCode":"13008","ShipCountry":"France"},{"OrderID":11077,"CustomerID":"RATTC","EmployeeID":1,"OrderDate":"1998/05/06","RequiredDate":"1998/06/03","ShippedDate":null,"ShipVia":2,"Freight":"8.5300","ShipName":"Rattlesnake Canyon Grocery","ShipAddress":"2817 Milton Dr.","ShipCity":"Albuquerque","ShipRegion":"NM","ShipPostalCode":"87110","ShipCountry":"USA"}]
                }
        }
    }
]
};};
ThemeBuilder.__progressbars_group = function() { return {
    "id": "progressbars",
    "widgets": [
        {
            "name": "dxProgressBar",
            "supportedThemes": [ "all" ],
            "options": {
                "value": 40,
                "min": 0,
                "max": 100,
                "showStatus": true
            }
        }
    ]
};};
ThemeBuilder.__scheduler_group = function() { return {
"id": "scheduler", 
"widgets": [
	{
        "name": "dxScheduler",
        "id": "scheduler-preview",
        "supportedThemes":  [ "generic-dark", "generic-light", "generic-light-compact", "generic-dark-compact" ],
        "options": {
            "views": [ "month", "week", "day" ],
            "currentDate":  1433106000000,
			"width": 700,
            "currentView": "day",
            "firstDayOfWeek": 1,
            "dataSource":  [
				{
				    "startDate": 1433113200000,
				    "text": "The first appointment"
				},
				{
				    "startDate": 1433296800000,
				    "text": "The second appointment"
				}
            ]
        }
    }
]
};};
ThemeBuilder.__scrollview_group = function() { return {
"id": "scrollview", 
"widgets": [
		{
			"name": "dxScrollView",
			"supportedThemes": ["all"],
			"prerenderAction": "LOAD_SCROLLVIEW_CONTENT",
			"options": { 
				"bounceEnabled": true	
			}
		}
]
};};
ThemeBuilder.__sliders_group = function() { return {
"id": "sliders",
"ord": 2,
"widgets": [
	{
		"name": "dxSlider",
		"title": "dxSlider",
		"supportedThemes": ["all"],
		"options": {
			"min": 0, 
			"max": 100, 
			"value": 38
		}
	},
	{
		"name": "dxRangeSlider",
		"title": "dxRangeSlider",
		"supportedThemes": ["all"],
		"options": {
			"min": 0, 
			"max": 100, 
			"start": 38, 
			"end": 62
		}
	}
]
};};
ThemeBuilder.__tileview_group = function() { return {
	"id": "tileview",
	"widgets": [
		{
			"name": "dxTileView",
			"supportedThemes": ["all"],
			"options": {
				"listHeight": 400,
				"width": "100%",
				"items": [
					"Russia",
					"Czech",
					"Poland",
					"Greece",
					"Germany",
					"Portugal",
					"Denmark",
					"Netherlands",
					"Belgium",
                    "Italy",
                    "France",
                    "Spain",
                    "Ukraine",
                    "Ireland",
                    "Austria",
                    "Sweden",
                    "Norway",
                    "Finland"
				]
			}
		}
	]
};};
