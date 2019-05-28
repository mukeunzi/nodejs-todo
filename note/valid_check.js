const validCheckInput = () => {
	const signUpForm = document.forms['frmSignUp'];
	const fname = signUpForm['fname'].value;
	const lname = signUpForm['lname'].value;
	const userId = signUpForm['userId'].value;
	const password = signUpForm['password'].value;
	const rePassword = signUpForm['rePassword'].value;

	if (!isValid({ fname, lname, userId, password, rePassword })) {
		return false;
	}
};

const isValid = ({ fname, lname, userId, password, rePassword }) => {
	return validCheckName(fname, lname) && validCheckUserId(userId) && validCheckPassword(password, rePassword);
};

const validCheckName = (fname, lname) => {
	const kor_eng_num_RegExp = /^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9]{1,10}$/; //한글, 영어, 숫자
	const isValidFName = kor_eng_num_RegExp.test(fname);
	const isValidLName = kor_eng_num_RegExp.test(lname);

	if (!isValidFName) {
		document.querySelector('#fname').focus();
		return false;
	}
	if (!isValidLName) {
		document.querySelector('#lname').focus();
		return false;
	}

	return true;
};

const validCheckUserId = userId => {
	const eng_num_dot_RegExp = /^[A-Za-z0-9\.]{1,10}$/; //영어, 숫자, 점(.)
	const isValidId = eng_num_dot_RegExp.test(userId);

	if (!isValidId) {
		document.querySelector('#userId').focus();
		return false;
	}

	return true;
};

const validCheckPassword = (password, rePassword) => {
	const eng_num_RegExp = /^[A-za-z0-9]{8,20}$/; //영어, 숫자
	const isValidPassword = eng_num_RegExp.test(password);

	if (!isValidPassword) {
		document.querySelector('#rePassword').value = '';
		document.querySelector('#password').focus();
		return false;
	}
	if (password !== rePassword) {
		document.querySelector('#rePassword').value = '';
		document.querySelector('#rePassword').focus();
		return false;
	}

	return true;
};
