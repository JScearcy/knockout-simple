using knockoutwork.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace knockoutwork.Controllers
{
    public class PeopleController : ApiController
    {
		Person[] people = new Person[]
		{
			new Person { Name = "Jake", Age = 28, Weight = 210 },
			new Person { Name = "JD", Age = 7, Weight = 50 }
		};

		[HttpGet]
		public IEnumerable<Person> GetAllPeople()
		{
			return people;
		}

    }
}