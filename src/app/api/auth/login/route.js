import dbConnect from '@/lib/dbconnect';
import User from '@/models/userModel';

import bcrypt from 'bcryptjs';
import { generateToken } from '@/utils/auth';

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) return Response.json({ error: 'Invalid email' }, { status: 400 });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return Response.json({ error: 'Invalid password' }, { status: 400 });

  const token = generateToken(user);
  return Response.json({ token, role: user.role });
}
