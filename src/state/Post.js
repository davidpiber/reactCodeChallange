import moment from 'moment';

export default class Post {
    constructor({
        title,
        author,
        created,
        num_comments,
        selfText,
        preview,
        thumbnail,
        id ,
        url}) {
            this.title = title;
            this.author = author;
            this.created = created;
            this.numComments = num_comments;
            this.selfText = selfText;
            this.preview = preview;
            this.thumbnail = thumbnail;
            this.id = id;
            this.url = url;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getCreated() {
        return this.title;
    }

    printCreatedDate() {
        return this.created ? moment.unix(this.created).fromNow() : moment().fromNow();
    }

    getPostCommentsCount() {
        return this.numComments;
    }

    getText() {
        return this.selfText;
    }

    getImageSrc() {
        const { preview } = this;
        return (preview &&  preview.images) ? preview.images[0].source.url : '';
    }

    getTumbNail() {
        return this.thumbnail;
    }

    getId() {
        return this.id;
    }

    getUrl() {
        return this.url;
    }
}