export interface OrderItem {
    id: string;
    articleId: string;
    subOrderId: string;
    quantity: number;
    total: number;
    detailedSize: string;
    createdAt: Date;
    updatedAt: Date;
}