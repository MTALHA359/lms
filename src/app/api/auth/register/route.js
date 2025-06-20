import dbConnect from '@/lib/dbConnect';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await dbConnect();
  const { name, email, password, role } = await req.json();

  const userExist = await User.findOne({ email });
  if (userExist) return Response.json({ error: 'User already exists' }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed, role });

  return Response.json({ success: true });
}
