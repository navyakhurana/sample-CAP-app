namespace cap.test.db;

entity Roots {
    key id: Int16;
    name: String(200);
    children: Association to many OtherRoots on children.root = $self;
}

entity OtherRoots  {
    key id: Int16;
    root: Association to Roots;
    name: String(200)
}

