/*
 * LiskHQ/lisky
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import transactions from '../../../src/utils/transactions';
import {
	getNumbers,
	getTransactionCreatorFunctionNameByType,
} from '../utils';

export function itShouldCreateATransferTransactionUsingTheAddressTheAmountThePassphraseAndTheSecondPassphrase() {
	const {
		passphrase, secondPassphrase, address, amount,
	} = this.test.ctx;
	return (transactions.transfer).should.be.calledWithExactly({
		recipientId: address,
		amount,
		secret: passphrase,
		secondSecret: secondPassphrase,
	});
}

export function itShouldCreateATransferTransactionUsingTheAddressTheAmountAndThePassphrase() {
	const { passphrase, address, amount } = this.test.ctx;
	return (transactions.transfer).should.be.calledWithExactly({
		recipientId: address,
		amount,
		secret: passphrase,
		secondSecret: null,
	});
}

export function itShouldHaveAFunctionForCreatingATypeTransaction() {
	const { transactionsObject } = this.test.ctx;
	const transactionType = getNumbers(this.test.title)[0];
	const transactionFunctionName = getTransactionCreatorFunctionNameByType(transactionType);
	return (transactionsObject).should.have.key(transactionFunctionName).and.be.type('function');
}

export function itShouldCreateARegisterSecondPassphraseTransactionUsingThePassphraseAndTheSecondPassphrase() {
	const { passphrase, secondPassphrase } = this.test.ctx;
	return (transactions.registerSecondPassphrase).should.be.calledWithExactly({
		secret: passphrase,
		secondSecret: secondPassphrase,
	});
}

export function itShouldResolveToTheCreatedTransaction() {
	const { returnValue, createdTransaction } = this.test.ctx;
	return (returnValue).should.be.fulfilledWith(createdTransaction);
}

export function itShouldCreateARegisterDelegateTransactionUsingThePassphraseAndTheDelegateUsername() {
	const { passphrase, delegateUsername } = this.test.ctx;
	return (transactions.registerDelegate).should.be.calledWithExactly({
		secret: passphrase,
		username: delegateUsername,
		secondSecret: null,
	});
}

export function itShouldCreateARegisterDelegateTransactionUsingThePassphraseTheSecondPassphraseAndTheDelegateUsername() {
	const { passphrase, secondPassphrase, delegateUsername } = this.test.ctx;
	return (transactions.registerDelegate).should.be.calledWithExactly({
		secret: passphrase,
		username: delegateUsername,
		secondSecret: secondPassphrase,
	});
}

export function itShouldCreateACreateMultisignatureAccountTransactionUsingThePassphraseTheSecondPassphraseTheKeysgroupTheLifetimeAndTheMinimumNumberOfSignatures() {
	const {
		passphrase, secondPassphrase, keysgroup, lifetime, minimum,
	} = this.test.ctx;
	const publicKeysWithPlus = keysgroup.map((publicKey) => {
		return `+${publicKey}`;
	});
	return (transactions.registerMultisignature).should.be.calledWithExactly({
		secret: passphrase,
		secondSecret: secondPassphrase,
		keysgroup: publicKeysWithPlus,
		lifetime,
		min: minimum,
	});
}

export function itShouldCreateACreateMultisignatureAccountTransactionUsingThePassphraseTheKeysgroupTheLifetimeAndTheMinimumNumberOfSignatures() {
	const {
		passphrase, keysgroup, lifetime, minimum,
	} = this.test.ctx;
	const publicKeysWithPlus = keysgroup.map((publicKey) => {
		return `+${publicKey}`;
	});
	return (transactions.registerMultisignature).should.be.calledWithExactly({
		secret: passphrase,
		secondSecret: null,
		keysgroup: publicKeysWithPlus,
		lifetime,
		min: minimum,
	});
}
