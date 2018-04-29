import { FilesCollection } from 'meteor/ostrio:files';

Files = new FilesCollection({
	collectionName: 'files',
	allowClientCode: false
});

export default Files;
