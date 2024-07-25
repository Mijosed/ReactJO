import { Component } from '../../core/Component.js';

export class Pagination extends Component {
    constructor(props = {}) {
        super(props);
        this.totalItems = props.state.totalItems;
        this.itemsPerPage = props.state.itemsPerPage;
        this.currentPage = props.state.currentPage;
        this.onPageChange = props.onPageChange;
    }

    handlePageClick(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= Math.ceil(this.state.totalItems / this.state.itemsPerPage)) {
            this.onPageChange(pageNumber);
            this.setState({ currentPage: pageNumber });
        }
    }

    render() {
        const totalPages = Math.ceil(this.state.totalItems / this.state.itemsPerPage);
        return {
            tag: "div",
            props: { class: "flex justify-center mt-4", id: this.props.id },
            children: [
                {
                    tag: "button",
                    props: {
                        class: "w-10 h-10 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full mx-1",
                        onClick: () => this.handlePageClick(this.state.currentPage - 1)
                    },
                    children: ["<"]
                },
                ...Array(totalPages).fill(0).map((_, i) => ({
                    tag: "button",
                    props: {
                        class: `w-10 h-10 flex items-center justify-center border border-blue-500 ${this.state.currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-blue-500'} rounded-full mx-1`,
                        onClick: () => this.handlePageClick(i + 1)
                    },
                    children: [(i + 1).toString()]
                })),
                {
                    tag: "button",
                    props: {
                        class: "w-10 h-10 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full mx-1",
                        onClick: () => this.handlePageClick(this.state.currentPage + 1)
                    },
                    children: [">"]
                }
            ]
        };
    }
}
