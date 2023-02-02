const t = {
    noAccounts: 'You have no accounts in your wallet.',
    removeAccount: 'Remove account (local only)',
    resetConnections: 'Reset connections',
    accountAddress: 'Account address',
    siteConnected: 'Connected',
    siteNotConnected: 'Not connected',
    accountBalanceError: 'Unable to retrieve account balance',
    actions: {
        log: 'Transaction log',
        send: 'Send CCD',
        receive: 'Receive CCD',
        settings: 'Account settings',
        tokens: 'Tokens',
    },
    details: {
        total: 'Public balance total',
        atDisposal: 'Public amount at disposal',
        stakeAmount: 'Stake / delegation amount',
    },
    settings: {
        connectedSites: {
            title: 'Connected sites',
            noConnected: 'The selected account is not connected to any sites.',
            connect: 'Connect',
            disconnect: 'Disconnect',
        },
        exportPrivateKey: {
            title: 'Export private key',
            description: 'Please enter your passcode to show the private key.',
            copyDescription: 'Press the button to copy your private key.',
            show: 'Show private key',
            done: 'Done',
            export: 'Export',
        },
        accountStatement: {
            title: 'Export transaction log',
            description:
                'Transaction logs of an account can be generated and downloaded from CCDScan.io.\n\nCCDScan is a Concordium block explorer, and pressing the button below will open the website in your browser.',
            link: 'Go to CCDScan.io',
        },
    },
    sendCcd: {
        labels: {
            ccd: 'Enter amount to transfer',
            recipient: 'Enter recipient address',
        },
        buttons: {
            back: 'Back',
            send: 'Send',
            finish: 'Finish',
            continue: 'Continue',
        },
        title: 'Send CCD',
        currentBalance: 'Current balance',
        unableToCoverCost: 'Insufficient CCD to cover estimated cost',
        unableToSendFailedInvoke: 'Simulation of transfer failed, unable to proceed.',
        transferInvokeFailed: 'Simulation of transfer failed: {{ message }}',
        unableToCreatePayload: 'Unable to create transaction: {{ message}}',
        nonexistingAccount: 'The recipient is not registered on the chain',
        fee: 'Estimated transaction fee',
    },
    tokens: {
        tabBar: {
            ft: 'Fungible',
            nft: 'Collectibles',
            manage: 'Manage',
        },
        add: {
            lookupTokens: 'Look for tokens',
            indexRequired: 'Contract index is required',
            noContractFound: 'No contract found on index',
            noTokensError: 'No tokens found in contract',
            failedTokensError: 'Error occurred when checking for tokens in the contract',
            contractIndex: 'Contract index',
            hexId: 'Invalid token ID (must be HEX encoded)',
            updateTokens: 'Update tokens',
            chooseContractHeader: 'Enter a contract index to select tokens from.',
            ItemBalancePre: 'Your balance: ',
            searchLabel: 'Search for token ID in {{ contractName }}',
            noValidTokenError: 'Token either does not exist or cannot be used in wallet',
            noTokensChange: 'No updates made to token list.',
            tokensChanged: 'Token list updated.',
            missingMetadata: 'Tokens could not be shown due to missing metadata.',
            emptyList: 'No tokens found.',
        },
        unownedUnique: 'Not owned',
        listAddMore: 'You can add more tokens from the Manage page.',
        listEmpty: 'You can add tokens from the Manage page.',
    },
    accountPending: 'This account is still pending finalization.',
    accountRejected: 'This account failed to be created.',
    request: 'Create account',
    unknown: 'unknown',
};

export default t;