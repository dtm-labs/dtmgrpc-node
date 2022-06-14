export default class IdGenerator {
  parentId: string;
  branchId: number;
  newBranchId(): string {
    if (this.branchId >= 99) {
      throw 'branch id is larger than 99';
    }
    if (this.parentId.length > 20) {
      throw 'total branch id is longer than 20';
    }
    this.branchId = this.branchId + 1;
    return this.parentId + ('' + this.branchId).padStart(2, '0');
  }
  constructor(parentId = '') {
    this.parentId = parentId;
    this.branchId = 0;
  }
}
