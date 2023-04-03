const es: {
	[key: string]: string
} = {
	forgotPasswordSendInstructions: "Enviar instrucciones",
	goBack: "Volver atrás",
	invalidEmailAndPassword: "Correo electrónico y contraseña incorrectas",
	email: "Correo electrónico",
	password: "Contraseña",
	emailAddress: "Correo electrónico",
	tfaCode: "Código de Autenticación en Dos Pasos",
	login: "Iniciar sesión",
	dontHaveAnAccountYet: "No tiene una cuenta aún?",
	accountCreateOne: "Cree una!",
	forgotYourPassword: "Olvidó su contraseña?",
	couldNotFindDefaultFolder: "No se pudo encontrar la carpeta predefinida",
	unlockLink: "Desbloquear",
	download: "Descargar",
	cannotDownloadEmptyFolder: "No se puede descargar una carpeta vacía",
	thisFolderIsEmpty: "Esta carpeta está vacía",
	linkFolderEmptyInfo: "Una vez los archivos y carpetas sean añadidas a esta carpeta aparecerán aquí",
	confirmPassword: "Confirmar contraseña",
	createAccount: "Crear cuenta",
	alreadyHaveAnAccount: "Ya tiene una cuenta?",
	loginEx: "Iniciar sesión!",
	resendConfirmationEmail: "Reenviar correo de confirmación",
	reportAbuseModal_spam: "Spam",
	reportAbuseModal_dmca: "Infracción de derechos de autor",
	reportAbuseModal_cp: "Material de abuso sexual infantil",
	reportAbuseModal_stolen: "Información robada",
	reportAbuseModal_malware: "Malware",
	reportAbuseModal_other: "Otro",
	abuseReport: "Reportar abuso",
	abuseReportModalInfo: "Use este formulario para reportar archivos compartidos inapropiados, ilegales o dañinos.",
	yourEmailAddress: "Su correo electrónico",
	abuseReportModalInfoPlaceholder:
		"Por favor, ofrezcanos todos los detalles para que podamos tomar acción (opcional)",
	send: "Enviar",
	abuseReportModalReason: "Por favor elija un motivo",
	avatarUploadMaxFileSize: "El tamaño del archivo no puede exceder los 3MB",
	storageUsed: "Almacenamiento usado",
	storageUsedInfo: "__USED__ de __MAX__ en uso",
	storageUsedFilesAndFolders: "__USED__ Archivos",
	storageUsedVersionedFiles: "__USED__ Archivos versionados",
	storageUsedFree: "__FREE__ Libres",
	avatar: "Foto de perfil",
	edit: "Editar",
	personalInformation: "Información personal",
	darkMode: "Modo oscuro",
	language: "Idioma",
	change: "Cambiar",
	requestAccountData: "Solicinar datos de la cuenta",
	request: "Solicitar",
	logout: "Cerrar sesión",
	versionedFiles: "Archivos versionados",
	delete: "Eliminar",
	allFilesAndFolders: "Todos los archivos y carpetas",
	deleteAccount: "Eliminar cuenta",
	changePassword: "Cambiar contraseña",
	tfa: "Autenticación en Dos Pasos",
	subMoreInfo: "Más información sobre su suscripción",
	paymentMethod: "Método de pago",
	stripe: "Stripe",
	paypal: "PayPal",
	crypto: "Cripto",
	update: "Actualizar",
	cancel: "Cancelar",
	noSubs: "No hay suscripciones activas.",
	noInvoices: "No hay facturas aún.",
	planFeatures_1: "Banda ancha",
	planFeatures_2: "Encripción del lado del cliente",
	planFeatures_3: "Tecnología de cero conocimiento",
	planTerms_monthly: "Mensual",
	planTerms_annually: "Anual",
	planTerms_lifetime: "Permanente",
	planTerms_starter: "Inicial",
	buyNow: "Comprar ahora",
	general: "General",
	settings: "Ajustes",
	security: "Seguridad",
	plans: "Planes",
	subs: "Suscripciones",
	events: "Eventos",
	invoices: "Facturas",
	invalidEmail: "Correo electrónico incorrecto",
	invalidPassword: "Contraseña incorrecta",
	emailsDoNotMatch: "Los correos electrónicos no son iguales",
	changeEmailPleaseConfirm: "Por favor confirme su nuevo correo electrónico haciendo clic en el enlace enviado",
	newEmail: "Nuevo correo electrónico",
	confirmNewEmail: "Confirmar nuevo correo electrónico",
	save: "Guardar",
	firstName: "Primer nombre",
	lastName: "Apellido",
	companyName: "Nombre de la compañía",
	vatId: "ID de IVA",
	street: "Calle",
	streetNumber: "Número de la calle",
	city: "Ciudad",
	postalCode: "Código postal",
	country: "País",
	areYouSure: "Está seguro?",
	areYouSureDeleteAllVersioned: "Desea eliminar todos los archivos versionados? Esta acción no se puede deshacer!",
	areYouSureDeleteAll: "Desea eliminar todos los archivos y carpetas? Esta acción no se puede deshacer!",
	invalidNewPassword: "Contraseña nueva inválida",
	invalidCurrentPassword: "Contraseña actual inválida",
	newPasswordsDontMatch: "Las contraseñas nuevas no son iguales",
	invalidMasterKeys: "Las llaves maestras son inválidas",
	passwordChanged: "Contraseña cambiada",
	newPassword: "Nueva contraseña",
	confirmNewPassword: "Confirmar nueva contraseña",
	currentPassword: "Contraseña actual",
	deleteAccountConfirm:
		"Por favor confirme la eliminación de la cuenta haciendo clic en el enlace que ha recibido en su correo electrónico",
	areYouSureDeleteAccount:
		"Realmente desea eliminar su cuenta? Enviaremos un enlace de confirmación a su correo electrónico.",
	invalid2FACode: "Código de Autenticación en Dos Pasos inválido",
	enable2FA: "Habilitar Autenticación en Dos Pasos",
	copy: "Copiar",
	enter2FA: "Introducir código de Autenticación en Dos Pasos",
	enable: "Activar",
	recoveryKeys: "Claves de recuperación",
	recoveryKeysInfo:
		"Por favor guarde en un lugar seguro sus claves de recuperación. Es la única forma de recuperar su cuenta en caso de perder el disposivo con 2FA.",
	close: "Cerrar",
	disable2FA: "Deshabilitar Autenticación en Dos Pasos",
	disable: "Desactivar",
	sharedWithMe: "Compartido conmigo",
	sharedWithOthers: "Compartido con otros",
	links: "Enlaces",
	favorites: "Favoritos",
	recents: "Recientes",
	trash: "Papelera",
	cloudDrive: "Unidad en la nube",
	emptyTrash: "Vaciar papelera",
	monthlyRecurring: "Mensual",
	annuallyRecurring: "Anual",
	oneTimePayment: "Pago de una sola vez",
	buyRecurringInfo:
		"Al comprar un plan autoriza a Filen para cargarle automaticamente cada factura periódica hasta que cancele. Puede cancelar en cualquier momento vía su página de Cuenta. No hay reembolsos parciales.",
	buyLifetimeInfo:
		"Al comprar un plan autoriza a Filen para cargarle su método de pago. No hay reembolsos parciales.",
	creditDebit: "Tarjetas Crédito / Débito",
	cancelSub: "Cancelar suscripción",
	cancelSubSure: "Desea cancelar esta suscripción?",
	cancellingSub: "Cancelando suscripción",
	createFolder: "Crear carpeta",
	createTextFile: "Crear archivo de texto",
	uploadFiles: "Subir archivos",
	uploadFolders: "Subir carpetas",
	preview: "Previsualizar",
	preparingDownload: "Preparando descarga",
	normalDownload: "Descarga normal",
	zipDownload: "Descarga en ZIP",
	publicLink: "Enlace público",
	share: "Compartir",
	versions: "Versiones",
	color: "Color",
	color_default: "Predefinido",
	color_blue: "Azul",
	color_green: "Verde",
	color_purple: "Morado",
	color_red: "Rojo",
	color_gray: "Gris",
	unfavorite: "Desmarcar favorito",
	favorite: "Marcar favorito",
	rename: "Renombrar",
	move: "Mover",
	selectDestination: "Seleccionar destino",
	restore: "Restaurar",
	deletePerm: "Eliminar permanentemente",
	remove: "Eliminar",
	stopSharing: "Dejar de compartir",
	cookieConsent: "Este sitio web usa cookies para medir y mejorar su experiencia.",
	accept: "Aceptar",
	optOut: "Optar fuera",
	onlyNeeded: "Solo necesario",
	pleaseChooseDiffName: "Por favor elija un nombre distinto",
	newFolderName: "Nombre",
	itemsMovedToTrash: "__COUNT__ elementos movidos a la papelera",
	couldNotMoveToTrash: "No se pudo mover __NAME__ a la papelera: __ERR__",
	deleteModalSure: "Desea eliminar __COUNT__ elementos?",
	deletePermModalSure: "Desea eliminar permanentemente __COUNT__ elementos? Esta acción no se puede deshacer!",
	itemsDeletedPerm: "__COUNT__ elementos eliminados permanentemente",
	couldNotDeletePerm: "No se pudo eliminar __NAME__ permanentemente: __ERR__",
	uploadHere: "Subir aquí",
	event: "Evento",
	date: "Fecha",
	ipAddress: "Dirección IP",
	na: "N/A",
	listEmpty_1: "No hay archivos o carpetas compartidas con usted aún",
	listEmpty_2: "Cuando alguien comparta archivos o carpetas con usted aparecerán aquí",
	listEmpty_3: "No hay archivos o carpetas compartidas con otros aún",
	listEmpty_4: "Cuando comparta archivos o carpetas con alguien aparecerán aquí",
	listEmpty_5: "No hay enlaces públicos aún",
	listEmpty_6: "Cuando cree enlaces públicos para archivos o carpetas aparecerán aquí",
	listEmpty_7: "No hay favoritos aún",
	listEmpty_8: "Cuando marque archivos o carpetas aparecerán aquí",
	listEmpty_9: "No hay recientes aún",
	listEmpty_10: "Archivos subidos recientemente aparecerán aquí",
	listEmpty_11: "Nada en la papelera",
	listEmpty_12: "Cuando marque archivos o carpetas para ser eliminadas aparecerán aquí",
	listEmpty_13: "No hay archivos o carpetas subidas aún",
	listEmpty_14: "Arrastre y suelte archivos o carpetas aquí o presione el botón inferior",
	listFooterSelected: "__COUNT__ seleccionado de __TOTAL__",
	name: "Nombre",
	size: "Tamaño",
	lastModified: "Última vez modificado",
	moveModalBtn: "Mover __COUNT__ elementos a __DEST__",
	file: "Archivo",
	ctrlPlusS: "CTRL + S",
	exit: "Salir",
	fileHasBeenChanged: "El archivo ha sido cambiado",
	textEditorExitSure: "Desea salir sin guardar?",
	saveChanges: "Guardar cambios",
	expire_never: "Nunca",
	expire_1h: "1 hora",
	expire_6h: "6 horas",
	expire_1d: "1 día",
	expire_3d: "3 días",
	expire_7d: "7 días",
	expire_14d: "14 días",
	expire_30d: "30 días",
	addingItemsToPublicLink: "Añadiendo elementos a enlace público",
	addingItemsToPublicLinkProgress: "Añadiendo __LEFT__ elementos a enlace público",
	enabled: "Activado",
	disabled: "Desactivado",
	copied: "Copiado",
	publicLinkDownloadBtn: "Botón de descarga habilitado",
	publicLinkPassword: "Contraseña (dejar en blanco para desactivar)",
	removedSharedItems: "Eliminados __COUNT__ elementos compartidos",
	couldNotRemoveSharedItems: "No se pudo eliminar __NAME__: __ERR__",
	removeSharedItemsModalInfo: "Desea  eliminar __COUNT__ elementos? Ya no podrá acceder a ellos.",
	renameNewName: "Nuevo nombre",
	selectFromComputer: "Seleccionar del ordenador",
	upload: "Subir",
	files: "Archivos",
	folders: "Carpetas",
	newFolder: "Nueva carpeta",
	sharedWith: "Compartido conmigo",
	sharingItems: "Compartiendo elementos",
	sharingItemsProgress: "Compartiendo __LEFT__ elementos",
	itemsSharedWith: "__COUNT__ elementos compartidos con __EMAIL__",
	shareReceiver: "Correo electrónico del destinatario",
	upgrade: "Mejorar",
	stoppedSharingItems: "Dejó de compartir __COUNT__ elementos",
	couldNotStopSharingItem: "No se pudo dejar de compartir __NAME__: __ERR__",
	stopSharingModalSure:
		"Desea dejar de compartir __COUNT__ elementos? Los demás individuos ya no podrán acceder a ellos.",
	aboutRemaining: "__TIME__ restantes",
	transferringItems: "Transferiendo __COUNT__ elementos",
	uploadingItems: "Subiendo __COUNT__ elementos",
	downloadingItems: "Descargando __COUNT__ elementos",
	new: "Nuevo",
	resume: "Reanudar",
	pause: "Pausar",
	stop: "Detener",
	done: "Terminado",
	noUploadsQueued: "No hay cargas en cola",
	creatingFolders: "Creando carpetas",
	creatingFoldersProgress: "Creando __LEFT__ carpetas",
	current: "Actual",
	create: "Crear",
	changingColor: "Cambiando el color de __COUNT__ elementos",
	couldNotChangeColor: "No se pudo cambiar el color para __NAME__: __ERR__",
	eventFileUploaded: "Archivo subido",
	eventFileVersioned: "Archivo versionado",
	eventVersionedFileRestored: "Archivo versionado restaurado",
	eventFileMoved: "Archivo movido",
	eventFileTrash: "Archivo movido a la papelera",
	eventFileRm: "Archivo eliminado",
	eventFileRestored: "Archivo restaurado",
	eventFileShared: "Archivo compartido",
	eventFileLinkEdited: "Enlace público del archivo editado",
	eventFolderTrash: "Carpeta movida a la papelera",
	eventFolderShared: "Carpeta compartida",
	eventFolderMoved: "Carpeta movida",
	eventFolderRenamed: "Carpeta renombrada",
	eventFolderCreated: "Carpeta creada",
	eventFolderRestored: "Carpeta restaurada",
	eventFolderColorChanged: "Color de carpeta cambiado",
	eventLogin: "Inicio de sesión",
	eventDeleteVersioned: "Archivos versionados y carpetas eliminadas",
	eventDeleteAll: "Todos los archivos y carpetas eliminadas",
	eventDeleteUnfinished: "Cargas no finalizadas eliminadas",
	eventTrashEmptied: "Papelera vaciada",
	eventRequestAccountDeletion: "Eliminación de cuenta solicitada",
	event2FAEnabled: "2FA activado",
	event2FADisabled: "2FA desactivado",
	eventCodeRedeem: "Código reclamado",
	eventEmailChanged: "Correo electrónico cambiado",
	eventPasswordChanged: "Contraseña cambiada",
	eventRemovedSharedInItems: "Archivos compartidos entrantes eliminados",
	eventRemovedSharedOutItems: "Archivos compartidos salientes eliminados",
	eventFileUploadedInfo: "__NAME__ subido",
	eventFileVersionedInfo: "__NAME__ versionado",
	eventVersionedFileRestoredInfo: "Versión de archivo de __NAME__ restaurada",
	eventFileRenamedInfo: "__NAME__ renombrado a __NEW__",
	eventFileMovedInfo: "__NAME__ movido",
	fileRenamedInfo: "__NAME__ renombrado a __NEW__",
	eventFileTrashInfo: "__NAME__ movido a la papelera",
	eventFileRmInfo: "__NAME__ eliminado",
	eventFileRestoredInfo: "__NAME__ restaurado de la papelera",
	eventFileSharedInfo: "__NAME__ compartido con __EMAIL__",
	eventFileLinkEditedInfo: "Enlace público de __NAME__ editado",
	eventFolderTrashInfo: "__NAME__ movido a la papelera",
	eventFolderSharedInfo: "__NAME__ compartido con __EMAIL__",
	eventFolderMovedInfo: "__NAME__ movido",
	eventFolderRenamedInfo: "__NAME__ renombrado a __NEW__",
	eventFolderCreatedInfo: "__NAME__ creado",
	eventFolderRestoredInfo: "__NAME__ restaurado de la papelera",
	eventFolderColorChangedInfo: "Color de __NAME__ cambiado",
	eventLoginInfo: "Inicio de sesión",
	eventDeleteVersionedInfo: "Archivos y carpetas versionadas eliminadas",
	eventDeleteAllInfo: "Todos los archivos y carpetas eliminadas",
	eventDeleteUnfinishedInfo: "Subidas no finalizadas eliminadas",
	eventTrashEmptiedInfo: "Papelera vaciada",
	eventRequestAccountDeletionInfo: "Eliminación de cuenta solicitada",
	event2FAEnabledInfo: "2FA activado",
	event2FADisabledInfo: "2FA desactivado",
	eventCodeRedeemInfo: "Código __CODE__ reclamado",
	eventEmailChangedInfo: "Correo electrónico cambiado a __EMAIL__",
	eventPasswordChangedInfo: "Contraseña cambiada",
	eventRemovedSharedInItemsInfo: "__COUNT__ elementos compartidos conmigo de __EMAIL__ retirados",
	eventRemovedSharedOutItemsInfo: "__COUNT__ elementos compartidos con __EMAIL__ retirados",
	favoritingItems: "Marcar como favorito __COUNT__ elementos",
	unfavoritingItems: "Desmarcar como favorito __COUNT__ elementos",
	couldNotChangeFavStatus: "No se pudo cambiar estado de favorito para __NAME__: __ERR__",
	pleaseChooseDiffDest: "Por favor elija un destino distinto",
	movingItems: "Moviendo __COUNT__ elementos",
	folderExistsAtDest: "Una carpeta con el nombre __NAME__ ya existe en el destino",
	couldNotMoveItem: "No se pudo mover __NAME__: __ERR__",
	restoringItems: "Restaurando __COUNT__ items",
	couldNotRestoreItem: "No se pudo restaurar __NAME__: __ERR__",
	changeEmail: "Cambiar correo electrónico",
	passwordsDoNotMatch: "Las contraseñas no son iguales",
	registerWeakPassword: "Su contraseña debe ser contener al menos 10 caracteres",
	invalidEmailOrPassword: "Corrreo electrónico o contraseña inválida",
	unknownErrorSupp: "Ocurrió un error desconocido. Por favor intente de nuevo o contacte al soporte.",
	registerEmailAlreadyRegistered: "Este correo electrónico ya está registrado.",
	gotIt: "Entendido",
	registration: "Registro",
	registrationEmailInstructions:
		"Para completar su registro por favor confirme su correo electrónico. Se le ha enviado un enlace con instrucciones.",
	forgotPasswordEmailSent:
		"Se le ha enviado un correo electrónico con instrucciones sobre cómo reiniciar su contraseña.",
	maxStorageReached: "Almacenamiento lleno",
	maxStorageReachedInfo:
		"Ha alcanzado su capacidad de almacenaje máxima. Por favor mejore su cuenta para subir más archivos.",
	upgradeNow: "Mejorar ahora",
	abuseReportSubmitted: "Reporte sobre abuso enviado!",
	invalidAbuseReason: "Motivo inválido",
	uploadErrored: "Falló",
	newTextFileName: "Nuevo nombre para el archivo de texto",
	passwordResetSuccess: "Contraseña cambiada. Por favor vuelva a iniciar sesión en todos sus dispositivos.",
	resetPasswordBtn: "Reiniciar contraseña",
	publicLinkDisabled: "Enlace público desactivado",
	expireAfter: "Expirar tras...",
	exportMasterKeys: "Exportar master keys",
	export: "Exportar",
	resetPasswordCheckbox:
		"Entiendo que al reiniciar my contraseña sin mis master keys exportadas voy a volver los datos guardados en mi cuenta inaccesibles debido a cómo el encriptado de fin a fin de cero conocimiento funciona.",
	invalidAuthVersion: "Versión de autenticación inválida",
	recoveryMasterKeysInput: "Master keys exportadas",
	exportMasterKeysInfo:
		"Exportar sus master keys hace que sea posible recuperar su cuenta sin perder los datos en caso de que olvide su contraseña. Por favor, asegúrese de exportar sus nuevas master keys siempre que cambie su contraseña.",
	import: "Importar",
	invite: "Invitar",
	yourReferralLink: "Su enlace",
	requestPayout: "Solicitar pago",
	invalidPayoutAddress: "Dirección de pago inválida",
	affiliatePayoutSuccess: "Solicitud de pago enviada",
	requestPayoutInfo:
		"Enviaremos las ganancias de su comisión afiliada a la dirección de Bitcon ofrecida en 1-7 días laborales.",
	comissionEarned: "Comisión obtenida",
	receivedBonusStorage: "Almacenamiento adicional recibido total",
	referInfo: "Reciba hasta __STORAGE__ de almacenamiento invitando a otros",
	referInfo2:
		"Por cada amigo que invite a Filen recibirá __STORAGE__ - y su amigo también recibe __OTHER_STORAGE__. Además, si su amigo compra una suscripción de su elección, usted ganará una comisión. El límite de pago por comisión es de __THRESHOLD__€. Su porcentaje de ganancia es __RATE__%.",
	yourBtcAddress: "Su dirección de Bitcoin",
	openUploads: "Abrir cargas",
	payNow: "Pagar factura ahora",
	emptyTrashModalSure: "Desea vaciar su papelera? Esta acción no se puede deshacer!",
	emptyTrashSuccess: "Papelera vaciada",
	itemRenamed: "Elemento renombrado"
}

export default es
