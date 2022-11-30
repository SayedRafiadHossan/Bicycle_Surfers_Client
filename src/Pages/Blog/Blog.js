import React from "react";
import img from "../../Images/Blog.jpg";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="hero-content text-center lg:text-left">
        <img className="ml-64" src={img} alt="" />
      </div>
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          BLOG
        </h2>
        <div className="divide-y divide-gray-700">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              There are four main types of state that we need to properly manage
              in our React apps: 1.Local state , 2.Global state, 3.Server state,
              4.Server state.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              How does prototypical inheritance work?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What is a unit test? Why should we write unit tests?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important.Unit
              testing is an important step in the development process, because
              if done correctly, it can help detect early flaws in code which
              may be more difficult to find in later testing stages.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              React vs. Angular vs. Vue?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              React can be used as a UI library to render elements, without
              enforcing a specific project structure, and that's why it's not
              strictly a framework. <br />
              The Vue.js core library focuses on the View layer only. It's
              called a progressive framework because you can extend its
              functionality with official and third-party packages, such as Vue
              Router or Vuex, to turn it into an actual framework. <br />
              AngularJS, the original framework, is an MVC
              (Model-View-Controller) framework. But in Angular 2, there's no
              strict association with MV*-patterns as it is also
              component-based.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
