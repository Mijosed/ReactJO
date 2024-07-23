import { Component } from '../../core/Component.js';

export class Pagination extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            currentPage: props.currentPage || 1,
            totalPages: props.totalPages || 10
        };
    }

    setPage(page) {
        if (page >= 1 && page <= this.state.totalPages) {
            this.setState({ currentPage: page });
            if (this.props.onPageChange) {
                this.props.onPageChange(page);
            }
        }
    }

    render() {
        const { currentPage, totalPages } = this.state;

        return {
            tag: "div",
            props: { class: "flex justify-center items-center my-8" },
            children: [
                {
                    tag: "button",
                    props: {
                        class: `flex items-center justify-center w-7 h-7 border-2 rounded-full mx-1 ${currentPage === 1 ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`,
                        onClick: () => this.setPage(currentPage - 1),
                        disabled: currentPage === 1
                    },
                    children: ["<"]
                },
                ...[1, 2, 3, 4].map(page => ({
                    tag: "button",
                    props: {
                        class: `flex items-center justify-center w-7 h-7 border-2 rounded-full mx-1 ${page === currentPage ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`,
                        onClick: () => this.setPage(page)
                    },
                    children: [page.toString()]
                })),
                {
                    tag: "span",
                    props: { class: "mx-2 text-blue-500" },
                    children: ["..."]
                },
                {
                    tag: "button",
                    props: {
                        class: `flex items-center justify-center w-7 h-7 border-2 rounded-full mx-1 ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`,
                        onClick: () => this.setPage(totalPages),
                    },
                    children: [totalPages.toString()]
                },
                {
                    tag: "button",
                    props: {
                        class: `flex items-center justify-center w-7 h-7 border-2 rounded-full mx-1 ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`,
                        onClick: () => this.setPage(currentPage + 1),
                        disabled: currentPage === totalPages
                    },
                    children: [">"]
                }
            ]
        };
    }
}
