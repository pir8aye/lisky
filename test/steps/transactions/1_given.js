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

export function aTransactionsObject() {
	this.test.ctx.transactionsObject = transactions;
}

export function aLiskObjectThatCanCreateTransactions() {
	const createdTransaction = {
		type: 0,
		amount: 123,
		publicKey: 'oneStubbedPublicKey',
	};

	[
		'transfer',
		'registerSecondPassphrase',
		'registerDelegate',
		'castVotes',
		'registerMultisignature',
	].forEach((methodName) => {
		transactions[methodName].returns(createdTransaction);
	});

	this.test.ctx.createdTransaction = createdTransaction;
}
