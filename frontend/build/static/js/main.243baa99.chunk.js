(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(20),s=n.n(i),o=(n(18),n(3)),r=n(25),u=n(2),l=n(21),j=n(22),d=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(l.a)(this,e),this._baseUrl=n,this._headers=a}return Object(j.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkStatus(e)}))}},{key:"getInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkStatus(e)}))}},{key:"updateDataUser",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"deleteCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)}}).then((function(e){return n._checkStatus(e)}))}},{key:"updateUserAvatar",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return n._checkStatus(e)}))}},{key:"likeCard",value:function(e,t,n){var a=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:e,headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(n)}}).then((function(e){return a._checkStatus(e)}))}}]),e}())({baseUrl:"https://api.mesto-full.nomoredomains.work"}),b=c.a.createContext(),p=n(0),m=function(e){var t=e.onCardClick,n=e.onCardLike,c=e.onCardDelete,i=e.card,s=Object(a.useContext)(b).currentUser,o=i.likes.some((function(e){return e===s._id})),r=i.owner===s._id,u="list__like ".concat(o?"list__like_active":""),l="list__basket ".concat(r?"":"list__basket_inactive");return Object(p.jsxs)("li",{className:"list__element",children:[Object(p.jsx)("img",{src:i&&i.link,alt:i&&i.name,className:"list__image",onClick:function(){t(i)}}),Object(p.jsxs)("div",{className:"list__group",children:[Object(p.jsx)("h2",{className:"list__name",children:i&&i.name}),Object(p.jsx)("button",{className:u,type:"button","aria-label":"Like",onClick:function(){n(i)},children:Object(p.jsx)("p",{className:"list__likes-counter",children:i.likes?i.likes.length:"0"})}),Object(p.jsx)("button",{className:l,type:"button","aria-label":"delete image",onClick:function(){c(i)}})]})]})},O=n.p+"static/media/header-logo.bbe2a6ea.svg",h=n(9),f=function(e){var t=e.buttonText,n=e.userEmail,c=e.endPoint,i=e.signOut,s=Object(a.useContext)(b),o=s.isBurgerMenuOpen,r=s.setIsBurgerMenuOpen;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)(h.c,{to:"/main",className:"logo",children:Object(p.jsx)("img",{src:O,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})}),Object(p.jsx)("div",{className:"header__burger ".concat(o?"active":""),onClick:function(){o?(r(!1),console.log(o)):(r(!0),console.log(o))},children:Object(p.jsx)("span",{className:"header__burger_span ".concat(o?"active":"")})}),Object(p.jsxs)("div",{className:"header__menu ".concat(o?"active":""),children:[n&&Object(p.jsx)("p",{className:"header__item ".concat(o?"active":""),children:n}),Object(p.jsx)("p",{className:"header__item ".concat(o?"active":""),children:Object(p.jsx)(h.c,{className:"header__link",to:c,onClick:i,children:t})})]})]})},_=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var g=function(e){var t=e.onAddPlace,n=e.onCardClick,c=e.onEditAvatar,i=e.onEditProfile,s=e.cards,o=e.onLikeClick,r=e.onDeleteClick,u=e.signOut,l=e.userEmail,j=Object(a.useContext)(b).currentUser;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{userEmail:l,buttonText:"\u0412\u044b\u0439\u0442\u0438",endPoint:"/sign-in",signOut:u}),Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("button",{type:"button","aria-label":"profile__avatar",className:"profile__avatar",style:{backgroundImage:"url(".concat(j.avatar,")")},onClick:c}),Object(p.jsxs)("div",{className:"profile-info",children:[Object(p.jsx)("h1",{className:"profile-info__name",id:"name",children:j.name}),Object(p.jsx)("button",{className:"profile-info__edit",type:"button","aria-label":"Edit",onClick:i}),Object(p.jsx)("p",{className:"profile-info__text",id:"job",children:j.about})]}),Object(p.jsx)("button",{type:"button",className:"profile__add","aria-label":"add profile",onClick:t})]}),Object(p.jsx)("section",{className:"elements",children:Object(p.jsx)("ul",{className:"list",children:s.map((function(e){return Object(p.jsx)(m,{card:e,onCardClick:n,onCardLike:o,onCardDelete:r},e._id)}))})})]}),Object(p.jsx)(_,{})]})},x=function(e){var t=e.isOpen,n=e.onClose,a=e.data;return Object(p.jsx)("div",{className:"popup popup_type_image ".concat(t?"popup_is-opened":""),children:Object(p.jsxs)("div",{className:"popup__content popup__content_image",id:"picture-popup",onClick:n,children:[Object(p.jsx)("button",{className:"popup__close",type:"button","aria-label":"close popupImage",onClick:n}),Object(p.jsx)("img",{src:a&&a.link,alt:a&&a.name,className:"popup__imgPic"}),Object(p.jsx)("h3",{className:"popup__imgText",children:a&&a.name})]})})};var v=function(e){var t=e.name,n=e.title,a=e.isOpen,c=e.onClose,i=e.onSubmit,s=e.children,o=e.button,r=e.idSubmitted;return Object(p.jsx)("div",{className:"popup ".concat(a?"popup_is-opened":""),id:"edit-".concat(t),onClick:c,children:Object(p.jsxs)("div",{className:"popup__content",children:[Object(p.jsx)("button",{type:"button","aria-label":"close popup",className:"popup__close",onClick:c}),Object(p.jsx)("h3",{className:"popup__title",children:n}),Object(p.jsxs)("form",{action:"#",id:"".concat(t),name:"".concat(t),className:"popup__form",onSubmit:i,children:[s,Object(p.jsx)("button",{"aria-label":"submit form",className:"popup__submit popup__submit_disabled",type:"submit",disabled:r,children:o})]})]})})},C=n(10);var S=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,i=e.isSubmitted,s=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),s=Object(u.a)(i,2),r=s[0],l=s[1],j=Object(a.useState)(!1),d=Object(u.a)(j,2),b=d[0],p=d[1],m=Object(a.useCallback)((function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),l(e),p(t)}),[c,l,p]);return{values:n,handleChange:function(e){var t=e.target,a=t.name,i=t.value;c(Object(o.a)(Object(o.a)({},n),{},Object(C.a)({},a,i))),l(Object(o.a)(Object(o.a)({},r),{},Object(C.a)({},a,e.target.validationMessage))),p(e.target.closest("form").checkValidity())},errors:r,isValid:b,resetForm:m,setValues:c,setIsValid:p}}();return Object(a.useEffect)((function(){s.resetForm()}),[t]),Object(p.jsx)(v,{name:"user-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),console.log(e.elements[0].value),c({avatar:e.elements[0].value})},idSubmitted:i,children:Object(p.jsxs)("label",{className:"popup__field",htmlFor:"avatar-link-input",children:[Object(p.jsx)("input",{type:"url",className:"popup__input",id:"avatar-link-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",required:!0}),Object(p.jsx)("span",{className:"form__input-error",id:"avatar-link-input-error"})]})})},k=function(e){return Object(p.jsxs)("label",{className:"popup__field",htmlFor:"".concat(e.id,"-input"),children:[Object(p.jsx)("input",Object(o.a)(Object(o.a)({},e),{},{className:"popup__input",id:"".concat(e.id,"-input")})),Object(p.jsx)("span",{className:"popup__input-error",id:"".concat(e.id,"-input-error")})]})},N=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,i=e.isSubmitted,s=Object(a.useContext)(b).currentUser,o=Object(a.useState)(""),r=Object(u.a)(o,2),l=r[0],j=r[1],d=Object(a.useState)(""),m=Object(u.a)(d,2),O=m[0],h=m[1];Object(a.useEffect)((function(){j(s.name),h(s.about)}),[s,t]);return Object(p.jsxs)(v,{name:"user-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i||c({name:l,about:O})},idSubmitted:i,children:[Object(p.jsx)(k,{type:"text",value:l||"",id:"user-name",name:"userNameInput",placeholder:"\u0418\u043c\u044f",required:!0,maxLength:"40",minLength:"2",onChange:function(e){j(e.target.value)}}),Object(p.jsx)(k,{type:"text",value:O||"",id:"user-job",name:"userNameInput",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,maxLength:"200",minLength:"2",onChange:function(e){h(e.target.value)}})]})},y=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,i=e.isSubmitted,s=Object(a.useState)(""),o=Object(u.a)(s,2),r=o[0],l=o[1],j=Object(a.useState)(""),d=Object(u.a)(j,2),b=d[0],m=d[1];Object(a.useEffect)((function(){i||(l(""),m(""))}),[i]);return Object(p.jsxs)(v,{name:"user-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r,link:b})},idSubmitted:i,children:[Object(p.jsx)(k,{type:"text",value:r||"",id:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"placeNameInput",required:!0,maxLength:"30",minLength:"2",onChange:function(e){l(e.target.value)}}),Object(p.jsx)(k,{type:"url",value:b||"",id:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"placeLinkInput",required:!0,onChange:function(e){m(e.target.value)}})]})},w=function(e){var t=e.isOpen,n=e.onClose,a=e.deleteCard,c=e.isSubmitted,i=e.data;return Object(p.jsx)(v,{name:"user-submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button:c?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435":"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c||a(i)},idSubmitted:c})},T=n(4),U=function(e){var t=e.name,n=e.title,a=e.onSubmit,c=e.children,i=e.button,s=e.isSubmitted,o=e.userSignUp;return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:n}),Object(p.jsxs)("form",{className:"login__form",id:"".concat(t),name:"".concat(t),autoComplete:"off",onSubmit:a,children:[c,Object(p.jsx)("button",{"arial-lable":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"submit",className:"login__submit ".concat(s?"login__submit_inactive":""),disabled:s,children:i}),o&&Object(p.jsx)("div",{className:"login__footer",children:Object(p.jsxs)("p",{className:"login__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(p.jsx)(h.b,{className:"login__subtitle login__link",to:"/sign-in",children:o})]})})]})]})},P=function(e){var t=e.onLogin,n=e.isSubmitted,c=Object(a.useState)({email:"",password:""}),i=Object(u.a)(c,2),s=i[0],r=i[1],l=function(e){var t=e.target,n=t.name,a=t.value;r(Object(o.a)(Object(o.a)({},s),{},Object(C.a)({},n,a)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{buttonText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",endPoint:"/sign-up"}),Object(p.jsxs)(U,{name:"user-sign-in",title:"\u0412\u043e\u0439\u0442\u0438",button:n?"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0434":"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e){e.preventDefault(),s.email&&s.password&&t(s.email,s.password)},isSubmitted:n,children:[Object(p.jsx)("input",{className:"login__input",type:"email",value:s.email,id:"email",placeholder:"Email",name:"email",required:!0,onChange:l}),Object(p.jsx)("input",{className:"login__input",type:"password",value:s.password,id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",required:!0,onChange:l})]})]})},E=function(e){var t=e.handleRegister,n=e.isSubmitted,c=Object(a.useState)({email:"",password:"",confirmPassword:""}),i=Object(u.a)(c,2),s=i[0],r=i[1],l=function(e){var t=e.target,n=t.name,a=t.value;r(Object(o.a)(Object(o.a)({},s),{},Object(C.a)({},n,a)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{mix:"page__header section",buttonText:"\u0412\u043e\u0439\u0442\u0438",endPoint:"/sign-in"}),Object(p.jsxs)(U,{name:"user-sign-up",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",button:n?"\u0418\u0434\u0435\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(e){e.preventDefault(),s.password&&s.email&&t(s.email,s.password,s.confirmPassword)},userSignUp:"\u0412\u043e\u0439\u0442\u0438",isSubmitted:n,children:[Object(p.jsx)("input",{className:"login__input",type:"email",value:s.email,id:"email",name:"email",placeholder:"Email",colormodifier:"form__login-input",required:!0,minLength:"2",onChange:l}),Object(p.jsx)("input",{className:"login__input",type:"password",value:s.password,id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",colormodifier:"form__login-input",required:!0,onChange:l}),Object(p.jsx)("input",{className:"login__input",type:"password",value:s.confirmPassword,id:"confirmPassword",name:"confirmPassword",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",colormodifier:"form__login-input",required:!0,onChange:l})]})]})},I=n(26),L=["component"],D=function(e){var t=e.component,n=Object(I.a)(e,L),c=Object(a.useContext)(b).isLoggedIn;return Object(p.jsx)(T.b,{children:function(){return c?Object(p.jsx)(t,Object(o.a)({},n)):Object(p.jsx)(T.a,{to:n.to})}})},A=function(e){var t=e.isOpen,n=e.onClose,c=e.name,i=Object(a.useContext)(b),s=i.authUserData,o=i.isSignedUp;return Object(p.jsx)("section",{className:"popup ".concat(t?"popup_is-opened":""),id:"edit-".concat(c),onClick:n,children:Object(p.jsxs)("div",{className:"popup__content popup__content_size-s",children:[Object(p.jsx)("div",{className:"popup__icon ".concat(o?"popup__icon_status_ok":"popup__icon_status_err")}),Object(p.jsx)("h2",{className:"popup__title",children:s.message}),Object(p.jsx)("button",{"arial-lable":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",tittle:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",className:"popup__close",onClick:n})]})})},B="https://api.mesto-full.nomoredomains.work",F={"Content-Type":"application/json"},q=function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))},z=function(e){return fetch("".concat(B,"/users/me"),{method:"GET",headers:Object(o.a)(Object(o.a)({},F),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return q(e)}))};var J=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(u.a)(i,2),l=s[0],j=s[1],m=Object(a.useState)(!1),O=Object(u.a)(m,2),h=O[0],f=O[1],_=Object(a.useState)(!1),v=Object(u.a)(_,2),C=v[0],k=v[1],U=Object(a.useState)(!1),I=Object(u.a)(U,2),L=I[0],F=I[1],J=Object(a.useState)(!1),M=Object(u.a)(J,2),V=M[0],R=M[1],H=Object(a.useState)(null),G=Object(u.a)(H,2),K=G[0],Q=G[1],W=Object(a.useState)(!1),X=Object(u.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)({}),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)({}),ce=Object(u.a)(ae,2),ie=ce[0],se=ce[1],oe=Object(a.useState)(!1),re=Object(u.a)(oe,2),ue=re[0],le=re[1],je=Object(a.useState)(!1),de=Object(u.a)(je,2),be=de[0],pe=de[1],me=Object(a.useState)(!1),Oe=Object(u.a)(me,2),he=Oe[0],fe=Oe[1],_e=Object(a.useState)({}),ge=Object(u.a)(_e,2),xe=ge[0],ve=ge[1],Ce=Object(a.useState)({}),Se=Object(u.a)(Ce,2),ke=Se[0],Ne=Se[1],ye=Object(a.useState)(!1),we=Object(u.a)(ye,2),Te=we[0],Ue=we[1],Pe=Object(a.useState)(!1),Ee=Object(u.a)(Pe,2),Ie=Ee[0],Le=Ee[1],De=Object(a.useState)(""),Ae=Object(u.a)(De,2),Be=(Ae[0],Ae[1]),Fe=Object(a.useState)(!1),qe=Object(u.a)(Fe,2),ze=(qe[0],qe[1]),Je=Object(T.g)();function Me(e){Be(e),setTimeout((function(){Be("")}),3e3)}Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");e&&z(e).then((function(t){t&&(Ne(t.email),pe(!0),Je.push("/"),d.getUserInfo(e).then((function(t){ne(t),d.getInitialCards(e).then((function(e){c(e)})).catch((function(e){Me(e)}))})).catch((function(e){Me(e)})))})).catch((function(e){Me(e)}))}),[be,Je]),Object(a.useEffect)((function(){Ve()}),[Je]);var Ve=function(){var e=localStorage.getItem("jwt");e&&z(e).then((function(e){var t=e.data;Ne(t.email),pe(!0),Je.push("/main")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0442\u043e\u043a\u0435\u043d\u0430:".concat(e)),Je.push("/signin"),ve(Object(o.a)(Object(o.a)({},xe),{},{message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u043f\u043e\u0434 \u0441\u0432\u043e\u0435\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u044c\u044e"})),le(!0)}))},Re=function(e){j(!1),k(!1),f(!1),R(!1),le(!1)},He=function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&Re()},Ge=function(e){27===e.keyCode&&Re()};return Object(a.useEffect)((function(){return(l||h||C||V||L)&&document.addEventListener("keydown",Ge),function(){document.removeEventListener("keydown",Ge)}}),[l,h,C,V,L]),Object(p.jsx)(b.Provider,{value:{currentUser:te,authUserData:xe,isLoggedIn:be,setIsShowPassword:Ue,isShowPassword:Te,isSignedUp:he,isBurgerMenuOpen:Ie,setIsBurgerMenuOpen:Le},children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsxs)(T.d,{children:[Object(p.jsx)(D,{path:"/main",component:g,onEditProfile:function(){j(!0)},onEditAvatar:function(){k(!0)},onAddPlace:function(){f(!0)},onCardClick:function(e){R(!0),Q(e)},cards:n,onLikeClick:function(e){var t=localStorage.getItem("jwt"),n=e.likes.some((function(e){return e===te._id}))?"DELETE":"PUT";d.likeCard(n,e._id,t).then((function(t){c((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}))},onDeleteClick:function(e){F(!0),se(e)},signOut:function(){pe(!1),localStorage.removeItem("jwt"),Ne({}),Je.push("/signin")},to:"/signin",userEmail:ke}),Object(p.jsx)(T.b,{path:"/signin",children:Object(p.jsx)(P,{onLogin:function(e,t){(function(e,t){return fetch("".concat(B,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return q(e)}))})(e,t).then((function(t){if(!t)return ze(!1),void le(!0);t.token&&(localStorage.setItem("jwt",t.token),Ne(e),pe(!0),Je.push("/"))})).catch((function(e){Me(e),ze(!1),le(!0)}))},isSubmitted:Y})}),Object(p.jsx)(T.b,{path:"/sign-up",children:Object(p.jsx)(E,{handleRegister:function(e,t,n){t===n?(Z(!0),function(e,t){return fetch("".concat(B,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return q(e)}))}(e,t).then((function(e){e?(ve(Object(o.a)(Object(o.a)({},xe),{},{message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})),le(!0),fe(!0),Ue(!1),Je.push("/signin")):(ve(Object(o.a)(Object(o.a)({},xe),{},{message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})),le(!0),fe(!1),Ue(!1),Z(!1))})).catch((function(e){var t=String(e);console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(t.split(":")[1])),ve(Object(o.a)(Object(o.a)({},xe),{},{message:"".concat(t.split(":")[1],"!")})),le(!0),fe(!1),setTimeout((function(){return Z(!1)}),3e3)}))):(ve(Object(o.a)(Object(o.a)({},xe),{},{password:"",confirmPassword:"",message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"})),fe(!1),Ue(!1),le(!0)),setTimeout((function(){return Z(!1)}),2e3)},isSubmitted:Y})}),Object(p.jsx)(T.b,{path:"/",children:be?Object(p.jsx)(T.a,{to:"/main"}):Object(p.jsx)(T.a,{to:"/signin"})})]}),Object(p.jsx)(S,{isOpen:C,onClose:He,onUpdateAvatar:function(e){var t=localStorage.getItem("jwt");Z(!0),d.updateUserAvatar(e,t).then((function(e){ne(Object.assign(te,{avatar:e.avatar})),k(!1),setTimeout((function(){return Z(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:Y}),Object(p.jsx)(N,{isOpen:l,onClose:He,onUpdateUser:function(e){var t=localStorage.getItem("jwt");Z(!0),d.updateDataUser(e,t).then((function(e){ne(e),j(!1),setTimeout((function(){return Z(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:Y}),Object(p.jsx)(y,{isOpen:h,onClose:He,onAddPlace:function(e){var t=localStorage.getItem("jwt");d.addNewCard(e,t).then((function(e){c([e].concat(Object(r.a)(n))),Re()})).catch((function(e){Me(e)}))},isSubmitted:Y}),Object(p.jsx)(x,{isOpen:V,data:K,onClose:He}),Object(p.jsx)(w,{isOpen:L,onClose:He,isSubmitted:Y,deleteCard:function(e){var t=localStorage.getItem("jwt");Z(!0),d.deleteCard(e._id,t).then((function(){c(n.filter((function(t){return t._id!==e._id}))),F(!1),setTimeout((function(){return Z(!1)}),1e3)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status," ").concat(e.statusText))}))},data:ie}),Object(p.jsx)(A,{isOpen:ue,onClose:He,name:"infoToolTip"})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(h.a,{children:Object(p.jsx)(J,{})})}),document.getElementById("root")),M()}},[[37,1,2]]]);
//# sourceMappingURL=main.243baa99.chunk.js.map