(this.webpackJsonpreact__mesto=this.webpackJsonpreact__mesto||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),r=n.n(s),i=(n(30),n(24)),o=n(2),l=n(0);function u(e){var t=e.userEmail,n=e.headerLinkName,a=e.onSignOut,s=c.a.useState(!1),r=Object(o.a)(s,2),i=r[0],u=r[1];return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"header__logo"}),Object(l.jsx)("div",{className:" header__menu ".concat(t?"header__menu_type_sign-in":""," ").concat(i?"header__menu_type_active":""),onClick:function(){u(!i)}}),Object(l.jsxs)("div",{className:" header__account-menu ".concat(t?"header__account-menu_type_sign-in":""," ").concat(i?"header__account-menu_type_visible":""),children:[Object(l.jsx)("div",{className:"header__wrapper-user-email",children:Object(l.jsx)("p",{className:" header__user-email ".concat(t?"header__user-email_type_sign-in":""),children:t})}),Object(l.jsx)("button",{type:"button",className:" header__button ".concat(t?"header__button_type_sign-in":""),onClick:function(){u(!1),a()},children:n})]})]})}var p=c.a.createContext();function d(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,r=Object(a.useContext)(p),i=t.owner===r._id,o=" ".concat(i?"card__delete":""," "),u=t.likes.some((function(e){return e===r._id}));return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("div",{className:"card__place",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){n(t)}}),Object(l.jsx)("h2",{className:"card__title",children:t.name}),Object(l.jsx)("button",{onClick:function(){c(t)},type:"button","aria-label":"like toggle",className:"  card__like  ".concat(u?"card__like_active":"","  "),children:Object(l.jsx)("p",{className:"card__likes-counter",children:t.likes.length})}),Object(l.jsx)("div",{onClick:function(){s(t)},className:o})]})}function j(e){var t=e.onCardClick,n=e.onAddPlace,c=e.onEditProfile,s=e.onEditAvatar,r=e.cards,i=e.onCardLike,o=e.onCardDelete,u=Object(a.useContext)(p);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("button",{type:"button","aria-label":"edit avatar image",className:"profile__avatar",onClick:s,style:{backgroundImage:"url(".concat(u.avatar,")")}}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__title",children:u.name}),Object(l.jsx)("button",{type:"button","aria-label":"edit profile",className:"profile__edit-button",onClick:c}),Object(l.jsx)("p",{className:"profile__subtitle",children:u.about})]}),Object(l.jsx)("button",{type:"button","aria-label":"add image",className:"profile__add-button",onClick:n})]}),Object(l.jsx)("section",{className:"places",children:Object(l.jsx)("ul",{className:"cards",children:r.map((function(e){return Object(l.jsx)(d,{onCardDelete:o,onCardLike:i,card:e,onCardClick:t},e._id)}))})})]})}function b(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})}function m(e){var t=e.onClose,n=e.name,a=e.isOpen,c=e.title,s=void 0===c?"":c,r=e.children;return Object(l.jsx)("div",{onClick:function(e){e.target.classList.contains("popup")&&t&&t()},className:"popup popup_type_".concat(n," ").concat(a?"visible-block":""," "),children:Object(l.jsxs)("div",{className:"popup__container popup__container_type_".concat(n),children:[Object(l.jsx)("button",{type:"button","aria-label":"close popup",className:"popup__close popup__close_type_".concat(n),onClick:t}),Object(l.jsx)("h3",{className:"popup__title popup__title_type_".concat(n),children:s}),r]})})}function h(e){var t=e.card,n=e.onClose,a=e.isOpen;return Object(l.jsx)(m,{name:"fullscreen",isOpen:a,onClose:n,children:Object(l.jsxs)("figure",{className:"popup__fullscreen-figure",children:[Object(l.jsx)("img",{src:"".concat(t.link),alt:t.name,className:"popup__fullscreen-image"}),Object(l.jsx)("figcaption",{className:"popup__caption",children:t.name})]})})}var _=n(20),O=n(21),f=new(function(){function e(t){var n=t.baseUrl;Object(_.a)(this,e),this._baseUrl=n}return Object(O.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkStatus(e)}))}},{key:"getInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkStatus(e)}))}},{key:"updateDataUser",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"deleteCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)}}).then((function(e){return n._checkStatus(e)}))}},{key:"updateUserAvatar",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"likeCard",value:function(e,t,n){var a=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:e,headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(n)}}).then((function(e){return a._checkStatus(e)}))}}]),e}())({baseUrl:"https://api.mesto-full.nomoredomains.work"}),g=n(6);function v(e){var t=e.name,n=e.title,a=e.isOpen,c=e.onClose,s=e.children,r=e.isDisabled,i=void 0!==r&&r,o=e.buttonText,u=e.onSubmit;return Object(l.jsx)(m,{onClose:c,name:t,isOpen:a,title:n,children:Object(l.jsxs)("form",{onSubmit:u,noValidate:!0,action:"#",name:t,className:"popup__form popup__form_type_".concat(t),method:"POST",children:[s,Object(l.jsx)("button",{disabled:i,"aria-label":"submit form",className:"popup__button-submit ".concat(i?"popup__button-submit_disabled":""," popup__button-submit_type_").concat(t),type:"submit",children:o})]})})}var x=n(13);function y(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({}),r=Object(o.a)(s,2),i=r[0],l=r[1],u=Object(a.useState)(!1),p=Object(o.a)(u,2),d=p[0],j=p[1],b=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c(e),l(t),j(n)}),[c,l,j]);return{values:n,handleChange:function(e){var t=e.target,a=t.name,s=t.value;c(Object(g.a)(Object(g.a)({},n),{},Object(x.a)({},a,s))),l(Object(g.a)(Object(g.a)({},i),{},Object(x.a)({},a,e.target.validationMessage))),j(e.target.closest("form").checkValidity())},errors:i,isValid:d,resetForm:b,setValues:c,setIsValid:j}}function C(e){var t=e.onUpdateUser,n=e.isOpen,c=e.onClose,s=e.sendingState,r=y(),i=Object(a.useContext)(p);return Object(a.useEffect)((function(){i.name&&(r.resetForm(),r.setValues(Object(g.a)(Object(g.a)({},r.values),{},{name:i.name,about:i.about})),r.setIsValid(!0))}),[i,n]),Object(l.jsxs)(v,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:n,onClose:c,buttonText:" ".concat(s||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"," "),isDisabled:!r.isValid,onSubmit:function(e){e.preventDefault(),t({name:r.values.name,about:r.values.about})},children:[Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{value:r.values.name||"",onChange:r.handleChange,id:"name-input-edit",required:!0,name:"name",minLength:"2",maxLength:"40",placeholder:"\u0418\u043c\u044f",className:" popup__input ".concat(r.errors.name?"popup__input_type_error":""),type:"text"}),Object(l.jsx)("span",{className:"popup__input-error name-input-edit-error",children:r.errors.name})]}),Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{value:r.values.about||"",onChange:r.handleChange,id:"job-input",required:!0,name:"about",minLength:"2",maxLength:"200",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:" popup__input ".concat(r.errors.about?"popup__input_type_error":""),type:"text"}),Object(l.jsx)("span",{className:"popup__input-error job-input-error",children:r.errors.about})]})]})}function k(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=e.sendingState,r=y();return Object(a.useEffect)((function(){r.resetForm()}),[t]),Object(l.jsx)(v,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,buttonText:" ".concat(s||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"," "),isDisabled:!r.isValid,onSubmit:function(e){e.preventDefault(),c({avatar:r.values.link})},children:Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{value:r.values.link||"",onChange:r.handleChange,id:"link-input-avatar",type:"url",required:!0,name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:" popup__input ".concat(r.errors.link?"popup__input_type_error":"")}),Object(l.jsx)("span",{className:"popup__input-error link-input-avatar-error",children:r.errors.link})]})})}function N(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=e.sendingState,r=y();return Object(a.useEffect)((function(){r.resetForm()}),[t]),Object(l.jsxs)(v,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,buttonText:" ".concat(s||"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"," "),isDisabled:!r.isValid,onSubmit:function(e){e.preventDefault(),c({name:r.values.name,link:r.values.link})},children:[Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{value:r.values.name||"",onChange:r.handleChange,id:"name-input-add",required:!0,name:"name",minLength:"2",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:" popup__input ".concat(r.errors.name?"popup__input_type_error":""),type:"text"}),Object(l.jsx)("span",{className:"popup__input-error name-input-add-error",children:r.errors.name})]}),Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{value:r.values.link||"",onChange:r.handleChange,id:"link-input",type:"url",required:!0,name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:" popup__input ".concat(r.errors.link?"popup__input_type_error":"")}),Object(l.jsx)("span",{className:"popup__input-error name-input-add-error",children:r.errors.link})]})]})}function S(e){var t=e.isOpen,n=e.onClose,a=e.cardDelete,c=e.onCardDelete,s=e.sendingState;return Object(l.jsx)(v,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onClose:n,buttonText:" ".concat(s||"\u0414\u0430"," "),isOpen:t,onSubmit:function(e){e.preventDefault(),c(a)}})}var w=n(3),T=n(25),L=["component"],E=function(e){var t=e.component,n=Object(T.a)(e,L);return Object(l.jsx)(w.b,{children:function(){return n.loggedIn?Object(l.jsx)(t,Object(g.a)({},n)):Object(l.jsx)(w.a,{to:"/sign-in"})}})};function D(e){var t=e.onLogin,n=y();return Object(l.jsxs)("div",{className:"entry",children:[Object(l.jsx)("h2",{className:"entry__title",children:"\u0412\u0445\u043e\u0434"}),Object(l.jsxs)("form",{className:"entry__form",noValidate:!0,action:"#",method:"POST",name:"login",onSubmit:function(e){e.preventDefault(),t(n.values.email,n.values.password)},children:[Object(l.jsxs)("label",{className:"entry__field",children:[Object(l.jsx)("input",{id:"entry-input-email",required:!0,name:"email",minLength:"5",maxLength:"40",placeholder:"Email",className:" entry__input ".concat(n.errors.email?"entry__input_type_error":""),type:"email",value:n.values.email||"",onChange:n.handleChange}),Object(l.jsx)("span",{className:"entry__input-error entry-input-email-error",children:n.errors.email})]}),Object(l.jsxs)("label",{className:"entry__field",children:[Object(l.jsx)("input",{id:"entry-input-password",required:!0,name:"password",minLength:"5",maxLength:"40",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:" entry__input ".concat(n.errors.password?"entry__input_type_error":""),type:"password",value:n.values.password||"",onChange:n.handleChange}),Object(l.jsx)("span",{className:"entry__input-error entry-input-email-error",children:n.errors.password})]}),Object(l.jsx)("button",{"aria-label":"submit form",className:" entry__button-submit ".concat(n.isValid?"":"entry__button-submit_disabled"," "),type:"submit",disabled:!n.isValid,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var U=n(10);function I(e){var t=e.onSignOut,n=e.onRegister,a=y();return Object(l.jsxs)("div",{className:"entry",children:[Object(l.jsx)("h2",{className:"entry__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(l.jsxs)("form",{className:"entry__form",noValidate:!0,action:"#",method:"POST",name:"register",onSubmit:function(e){e.preventDefault(),n(a.values.email,a.values.password)},children:[Object(l.jsxs)("label",{className:"entry__field",children:[Object(l.jsx)("input",{id:"entry-input-email",required:!0,name:"email",minLength:"5",maxLength:"40",placeholder:"Email",className:" entry__input ".concat(a.errors.email?"entry__input_type_error":""),type:"email",value:a.values.email||"",onChange:a.handleChange}),Object(l.jsx)("span",{className:"entry__input-error entry-input-email-error",children:a.errors.email})]}),Object(l.jsxs)("label",{className:"entry__field",children:[Object(l.jsx)("input",{id:"entry-input-password",required:!0,name:"password",minLength:"5",maxLength:"40",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:" entry__input ".concat(a.errors.password?"entry__input_type_error":""),type:"password",value:a.values.password||"",onChange:a.handleChange}),Object(l.jsx)("span",{className:"entry__input-error entry-input-email-error",children:a.errors.password})]}),Object(l.jsx)("button",{"aria-label":"submit form",className:" entry__button-submit ".concat(a.isValid?"":"entry__button-submit_disabled"," "),type:"submit",disabled:!a.isValid,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(l.jsx)(U.b,{className:"entry__link",to:"/sign-in",onClick:t,children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})}function P(e){var t=e.onClose,n=e.statusRegister,a=e.isOpen,c=e.name;return Object(l.jsx)(m,{onClose:t,name:c,isOpen:a,title:n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",children:Object(l.jsx)("div",{className:"popup__image popup__image_type_".concat(n?"success":"failure")})})}var V="https://api.mesto-full.nomoredomains.work",A={"Content-Type":"application/json"},B=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))};function q(e){var t=e.errorMessage;return Object(l.jsx)(m,{name:"error-message",isOpen:t,title:t})}function z(){var e=Object(w.g)(),t=Object(w.h)(),n=Object(a.useState)({}),c=Object(o.a)(n,2),s=c[0],r=c[1],d=Object(a.useState)(!1),m=Object(o.a)(d,2),_=m[0],O=m[1],v=Object(a.useState)(!1),x=Object(o.a)(v,2),y=x[0],T=x[1],L=Object(a.useState)(!1),U=Object(o.a)(L,2),z=U[0],F=U[1],J=Object(a.useState)(!1),M=Object(o.a)(J,2),R=M[0],H=M[1],G=Object(a.useState)(!1),K=Object(o.a)(G,2),Q=K[0],W=K[1],X=Object(a.useState)({name:"",link:""}),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)(""),te=Object(o.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(""),se=Object(o.a)(ce,2),re=se[0],ie=se[1],oe=Object(a.useState)([]),le=Object(o.a)(oe,2),ue=le[0],pe=le[1],de=Object(a.useState)({name:"",link:""}),je=Object(o.a)(de,2),be=je[0],me=je[1],he=Object(a.useState)(!1),_e=Object(o.a)(he,2),Oe=_e[0],fe=_e[1],ge=Object(a.useState)(!1),ve=Object(o.a)(ge,2),xe=ve[0],ye=ve[1],Ce=Object(a.useState)(!1),ke=Object(o.a)(Ce,2),Ne=ke[0],Se=ke[1],we=Object(a.useState)(""),Te=Object(o.a)(we,2),Le=Te[0],Ee=Te[1],De=Object(a.useState)(""),Ue=Object(o.a)(De,2),Ie=Ue[0],Pe=Ue[1];function Ve(){O(!1),T(!1),F(!1),W(!1),setTimeout((function(){$({name:"",link:""})}),1e3),H(!1),ye(!1)}function Ae(e){ae(e),setTimeout((function(){ae("")}),3e3)}function Be(e){"Escape"===e.key&&Ve()}function qe(){"\u0412\u044b\u0439\u0442\u0438"===Ie&&(localStorage.removeItem("jwt"),fe(!1),Pe("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),Ee(""),e.push("/sign-in")),"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"===Ie&&e.push("/sign-up"),"\u0412\u043e\u0439\u0442\u0438"===Ie&&e.push("/sign-in")}return Object(a.useEffect)((function(){"/sign-in"===t.pathname&&Pe("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),"/sign-up"===t.pathname&&Pe("\u0412\u043e\u0439\u0442\u0438")}),[t]),Object(a.useEffect)((function(){var t,n=localStorage.getItem("jwt");n&&(t=n,fetch("".concat(V,"/users/me"),{method:"GET",headers:Object(g.a)(Object(g.a)({},A),{},{Authorization:"Bearer ".concat(t)})}).then((function(e){return B(e)}))).then((function(t){t&&(Ee(t.email),fe(!0),e.push("/"),Pe("\u0412\u044b\u0439\u0442\u0438"),f.getUserInfo(n).then((function(e){r(e),f.getInitialCards(n).then((function(e){pe(e)})).catch((function(e){Ae(e)}))})).catch((function(e){Ae(e)})))})).catch((function(e){Ae(e)}))}),[Oe,e]),Object(a.useEffect)((function(){document.addEventListener("keydown",Be)}),[]),Object(l.jsx)(p.Provider,{value:s,children:Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"page-content",children:[Object(l.jsx)(u,{userEmail:Le,headerLinkName:Ie,onSignOut:qe}),Object(l.jsxs)(w.d,{children:[Object(l.jsx)(E,{exact:!0,path:"/",loggedIn:Oe,component:j,onEditProfile:function(){O(!_)},onAddPlace:function(){T(!y)},onEditAvatar:function(){F(!z)},onCardClick:function(e){$(e),W(!Q)},cards:ue,onCardLike:function(e){var t=localStorage.getItem("jwt"),n=e.likes.some((function(e){return e===s._id}));f.likeCard(n?"DELETE":"PUT",e._id,t).then((function(t){pe((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){Ae(e)}))},onCardDelete:function(e){H(!R),me(e)}}),Object(l.jsx)(w.b,{path:"/sign-in",children:Object(l.jsx)(D,{onLogin:function(t,n){(function(e,t){return fetch("".concat(V,"/signin"),{method:"POST",headers:A,body:JSON.stringify({email:e,password:t})}).then((function(e){return B(e)}))})(t,n).then((function(n){if(!n)return Se(!1),void ye(!0);n.token&&(localStorage.setItem("jwt",n.token),Ee(t),fe(!0),Pe("\u0412\u044b\u0439\u0442\u0438"),e.push("/"))})).catch((function(e){Ae(e),Se(!1),ye(!0)}))}})}),Object(l.jsx)(w.b,{path:"/sign-up",children:Object(l.jsx)(I,{onRegister:function(t,n){(function(e,t){return fetch("".concat(V,"/signup"),{method:"POST",headers:A,body:JSON.stringify({email:e,password:t})}).then((function(e){return B(e)}))})(t,n).then((function(t){t?(Se(!0),ye(!0),e.push("/sign-in")):(Se(!1),ye(!0))})).catch((function(e){Ae(e),Se(!1),ye(!0)}))},onSignOut:qe})}),Object(l.jsx)(w.b,{path:"/",children:Oe?Object(l.jsx)(w.a,{to:"/"}):Object(l.jsx)(w.a,{to:"/sign-in"})})]}),Object(l.jsx)(b,{}),Object(l.jsxs)("div",{className:"popups",children:[Object(l.jsx)(C,{isOpen:_,onClose:Ve,onUpdateUser:function(e){ie("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...");var t=localStorage.getItem("jwt");f.updateDataUser(e,t).then((function(e){r(e),Ve(),ie("")})).catch((function(e){Ae(e)}))},sendingState:re}),Object(l.jsx)(N,{isOpen:y,onClose:Ve,onAddPlace:function(e){ie("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...");var t=localStorage.getItem("jwt");f.addNewCard(e,t).then((function(e){pe([e].concat(Object(i.a)(ue))),Ve(),ie("")})).catch((function(e){Ae(e)}))},sendingState:re}),Object(l.jsx)(h,{card:Z,onClose:Ve,isOpen:Q}),Object(l.jsx)(S,{onClose:Ve,isOpen:R,cardDelete:be,onCardDelete:function(e){ie("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...");var t=localStorage.getItem("jwt");f.deleteCard(e._id,t).then((function(){pe((function(t){return t.filter((function(t){return t._id!==e._id}))})),Ve(),me({name:"",link:""}),ie("")})).catch((function(e){Ae(e)}))},sendingState:re}),Object(l.jsx)(k,{isOpen:z,onClose:Ve,onUpdateAvatar:function(e){ie("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...");var t=localStorage.getItem("jwt");f.updateUserAvatar(e,t).then((function(e){r(e),Ve(),ie("")})).catch((function(e){Ae(e)}))},sendingState:re}),Object(l.jsx)(P,{onClose:Ve,statusRegister:Ne,isOpen:xe,name:"info-tool-tip"}),Object(l.jsx)(q,{errorMessage:ne})]})]})})})}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(U.a,{children:Object(l.jsx)(z,{})})}),document.getElementById("root")),F()}},[[37,1,2]]]);
//# sourceMappingURL=main.aa7f7a62.chunk.js.map